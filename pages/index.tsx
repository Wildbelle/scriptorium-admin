import { useFormik } from 'formik'
import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'

import { axiosInstance } from '../src/service/axios'
import { login, selectAuthState } from '../src/store/authSlice'

const Home: NextPage = () => {
    const authState = useSelector(selectAuthState)
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
                const { token, refresh_token } = res.data
                dispatch(login({ token, refresh_token }))
            }
        })
        // console.log(values)
    }

    const fetchUsers = () => {
        axiosInstance
            .get('/users', {
                headers: {
                    Authorization: `Bearer ${authState.token}`,
                },
            })
            .then(res => {
                console.log(res)
            })
    }

    return (
        <>
            <div>
                <div>{authState.isLogged ? 'Logged in' : 'Not Logged In'}</div>
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
            <button onClick={fetchUsers}>Fetch Users</button>
        </>
    )
}

export default Home
