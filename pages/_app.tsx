import { FC, useContext, useEffect } from 'react'

import { EmotionCache } from '@emotion/react'
import type { NextComponentType } from 'next' //Import Component type
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import HeaderNavigation from '../src/components/Header/HeaderNavigation'
import { AuthContext, AuthProvider } from '../src/context/AuthContext'
import { axiosInstance } from '../src/service/axios'
import PageProvider from '../src/theme/helpers/PageProvider'

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache
}

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps &
    MUIAppProps & {
        Component: NextComponentType & { auth?: boolean } // add auth type
    }

const App: FC<CustomAppProps> = ({ Component, pageProps, emotionCache }) => {
    const router = useRouter()
    const authContext = useContext(AuthContext)

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (url !== '/' && !authContext.authState.token) {
                axiosInstance
                    .get('/me')
                    .then(res => {
                        //set redux store
                        if (res.data) {
                            authContext.setAuthState({
                                data: {
                                    token: res.data.email,
                                    refreshToken: res.data.email,
                                },
                            })
                        }
                    })
                    .catch(err => {
                        router.push('/')
                    })
            }
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])
    return (
        <AuthProvider>
            <PageProvider emotionCache={emotionCache}>
                <HeaderNavigation />
                <Component {...pageProps} />
            </PageProvider>
        </AuthProvider>
    )
}

export default App
