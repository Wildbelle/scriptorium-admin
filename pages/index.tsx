import { useContext, useState } from 'react'

import { useFormik } from 'formik'

import { AuthContext } from '../src/context/AuthContext'
import { axiosInstance } from '../src/service/axios'
const Home = () => {
    const [token, setToken] = useState()
    const authContext = useContext(AuthContext)

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
            authContext.setAuthState(res.data)
        })
        // console.log(values)
    }

    const fetchUsers = () => {
        axiosInstance
            .get('/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                console.log(res)
            })
    }

    return (
        <>
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
