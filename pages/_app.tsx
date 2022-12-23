import { FC, useEffect } from 'react'

import { EmotionCache } from '@emotion/react'
import type { NextComponentType } from 'next' //Import Component type
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '../src/components/navigations/footer/Footer'
import HeaderNavigation from '../src/components/navigations/header/HeaderNavigation'
import { AuthProvider } from '../src/context/AuthContext'
import { axiosInstance } from '../src/service/axios'
import { login, selectAuthState } from '../src/store/authSlice'
import { wrapper } from '../src/store/store'
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
    const authState = useSelector(selectAuthState)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (url !== '/' && !authState.isLogged) {
                console.log(authState)

                axiosInstance
                    .post('/token/refresh', {
                        refresh_token: authState.refresh_token,
                    })
                    .then(res => {
                        //set redux store
                        if (res.data) {
                            dispatch(login(res.data))
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
    }, [authState, dispatch, router])

    useEffect(() => {
        if (!authState.refresh_token) {
            const refresh_token = localStorage.getItem('refresh_token')

            if (refresh_token) {
                axiosInstance
                    .post('/token/refresh', {
                        refresh_token: refresh_token,
                    })
                    .then(res => {
                        //set redux store
                        if (res.data) {
                            dispatch(login(res.data))
                        }
                    })
                    .catch(err => {
                        router.push('/')
                    })
            }
        }
    }, [authState.refresh_token, dispatch, router])
    return (
        <AuthProvider>
            <PageProvider emotionCache={emotionCache}>
                <HeaderNavigation />
                <Component {...pageProps} />
                <Footer />
            </PageProvider>
        </AuthProvider>
    )
}

export default wrapper.withRedux(App)
