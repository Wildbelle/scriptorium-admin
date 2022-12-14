import { useEffect, useState } from 'react'

import axios from 'axios'

const Login = ({ formats }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const mainDivStyle = {
        padding: '1em',
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '560px',
    } as React.CSSProperties

    const handleSubmit = async e => {
        e.preventDefault()

        const credentials = { username, password }
        const urlParams = new URLSearchParams(window.location.search)
        const redirectUrl = urlParams.get('callbackUrl') || '/dashboard'

        const res = await fetch(`http://scriptorium.local/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('token', data.token)
            })
    }

    const handleGetUser = async () => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; PHPSESSID=`)
        console.log(value)
        axios.defaults.withCredentials = true
        axios.defaults.baseURL = 'http://scriptorium.local'

        // const users = await fetch(`http://scriptorium.local/users`, {
        //     method: 'GET',
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`,
        //         Cookie: 'PHPSESSID',
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => {})
    }

    const handleLogOut = async () => {
        // signOut()
    }

    useEffect(() => {}, [formats])

    return (
        <div style={mainDivStyle}>
            <form style={formStyle} onSubmit={e => handleSubmit(e)}>
                <label htmlFor="username"> Username </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                />

                <label htmlFor="password"> Password </label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button> Log in </button>
            </form>

            <button onClick={() => handleGetUser()}> User </button>

            <button onClick={() => handleLogOut()}> Logout </button>
        </div>
    )
}

export default Login

//serverSideProps
export async function getServerSideProps(context) {
    const result = await fetch('http://scriptorium.local/formats', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.req.cookies['next-auth.session-token']}`,
        },
    })
    const data = await result.json()

    return {
        props: {
            formats: data,
        },
    }
}
