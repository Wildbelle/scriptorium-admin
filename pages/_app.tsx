import { FC, useEffect, useState } from 'react'

import { EmotionCache } from '@emotion/react'
import type { NextComponentType } from 'next' //Import Component type
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import HeaderNavigation from '../src/components/navigations/header/HeaderNavigation'
import { AuthProvider } from '../src/context/AuthContext'
import { axiosInstance } from '../src/service/axios'
import { getAll, login, logout } from '../src/store/authSlice'
import { wrapper } from '../src/store/store'
import PageProvider from '../src/theme/helpers/PageProvider'

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache
}

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps &
    MUIAppProps & {
        Component: NextComponentType // add auth type
    }

const App: FC<CustomAppProps> = ({ Component, pageProps, emotionCache }) => {
    const { user, isLogged, token, refresh_token } = useSelector(getAll)
    const [isLoggedIn, setIsLoggedIn] = useState(isLogged)
    const [me, setMe] = useState(user)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () => {
        dispatch(logout())
        setIsLoggedIn(false)
        router.push('/')
    }

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            const token2 = token || localStorage.getItem('token')
            const refresh_token2 =
                refresh_token || localStorage.getItem('refresh_token')
            if (url !== '/' && !isLoggedIn) {
                axiosInstance
                    .post('/token/refresh', {
                        refresh_token: refresh_token2,
                    })
                    .then(res => {
                        //set redux store
                        if (res.data) {
                            let stateData = res.data
                            axiosInstance
                                .get('/me', {
                                    headers: {
                                        Authorization: `Bearer ${token2}`,
                                    },
                                })
                                .then(res => {
                                    stateData.user = res.data
                                    console.log(stateData)
                                })
                            dispatch(login(stateData))
                        }
                    })
                    .catch(err => {
                        router.push('/')
                    })
            }
        }
        handleRouteChange(router.pathname)
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [isLoggedIn, router, dispatch, refresh_token, token])

    return (
        <AuthProvider>
            <PageProvider emotionCache={emotionCache}>
                <HeaderNavigation />
                <Component {...pageProps} />
                {/* <Footer /> */}
            </PageProvider>
        </AuthProvider>
    )
}

export default wrapper.withRedux(App)
