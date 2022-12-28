import { useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'

import LoginForm from '../src/components/forms/LoginForm'
import { axiosInstance } from '../src/service/axios'
import { getTokens, getUser, isLogged } from '../src/store/authSlice'

const Home: NextPage = () => {
    const isLoggedIn = useSelector(isLogged)
    const { token, refresh_token } = useSelector(getTokens)
    const meRedux = useSelector(getUser)
    const [me, setMe] = useState(meRedux)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            axiosInstance
                .get('/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(res => {
                    setMe(res.data)
                })
        }
    }, [isLoggedIn, token])

    return <LoginForm />
}

export default Home
