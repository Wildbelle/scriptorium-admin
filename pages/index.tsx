import { useEffect, useState } from 'react'

import { Badge, Card, Typography } from '@mui/material'
import { useFormik } from 'formik'
import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'

import { axiosInstance } from '../src/service/axios'
import {
    getMe,
    getTokens,
    isLogged,
    login,
    logout,
} from '../src/store/authSlice'

const Home: NextPage = () => {
    const isLoggedIn = useSelector(isLogged)
    const { token, refresh_token } = useSelector(getTokens)
    const meRedux = useSelector(getMe)
    const [me, setMe] = useState(meRedux)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            handleSubmit(values)
        },
    })

    const handleSubmit = values => {
        axiosInstance.post('/login', values).then(res => {
            if (res.data) {
                const stateData = res.data
                axiosInstance
                    .get('/me', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then(res => {
                        stateData.user = res.data
                        dispatch(login(stateData))
                    })
            }
        })
        // console.log(values)
    }

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

    const fetchUsers = () => {
        axiosInstance
            .get('/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <>
            <div>
                <div>{isLogged ? 'Logged in' : 'Not Logged In'}</div>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button
                type="button"
                onClick={() => {
                    dispatch(logout())
                }}
            >
                Logout
            </button>
            <button onClick={fetchUsers}>Fetch Users</button>

            {me ? (
                <Card
                    sx={{
                        maxWidth: 345,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="textSmRegular">
                        {me.firstname + ' ' + me.lastname}
                    </Typography>
                    <Typography variant="textSmRegular">{me.email}</Typography>
                    {me.roles.map((role, index) => (
                        <Badge key={index}>
                            <Typography variant="textSmRegular" key={index}>
                                {role}
                            </Typography>
                        </Badge>
                    ))}
                </Card>
            ) : (
                <Card sx={{ maxWidth: 345 }}>
                    <Typography variant="textSmRegular">
                        No user found
                    </Typography>
                </Card>
            )}
        </>
    )
}

export default Home
