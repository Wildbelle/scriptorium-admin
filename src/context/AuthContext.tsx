import { createContext, useState } from 'react'

import { useTheme } from '@mui/material'

const AuthContext = createContext({
    authState: { token: '', refreshToken: '' },
    setAuthState: userAuthInfo => {},
    isUserAuthenticated: () => true || false,
})
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: '',
        refreshToken: '',
    })
    const theme = useTheme()

    const setUserAuthInfo = data => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('refreshToken', data.refresh_token)

        setAuthState({
            token: data.token,
            refreshToken: data.refresh_token,
        })
    }

    // checks if the user is authenticated or not
    const isUserAuthenticated = () => {
        return !!authState.token
    }

    const providerProps = {
        authState,
        setAuthState: userAuthInfo => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
    }

    return <Provider value={providerProps}>{children}</Provider>
}

export { AuthContext, AuthProvider }
