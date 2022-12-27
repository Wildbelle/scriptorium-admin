import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AppState } from './store'

// Type for our state
export interface User {
    id: number
    firstname: string
    lastname: string
    email: string
    roles: string[]
}
export interface AuthState {
    user: User | null
    isLogged: boolean
    token?: string
    refresh_token?: string
}

// Initial state
const initialState: AuthState = {
    isLogged: false,
    token: '',
    refresh_token: '',
    user: null,
}

// Actual Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            console.log(state.isLogged, action.payload)

            state.isLogged = action.payload
        },

        login(state, action) {
            state.isLogged = true
            state.token = action.payload.token
            state.refresh_token = action.payload.refresh_token
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('refresh_token', action.payload.refresh_token)
        },

        logout(state) {
            state.isLogged = false
            state.token = ''
            state.refresh_token = ''
            localStorage.removeItem('token')
            localStorage.removeItem('refresh_token')
        },

        // Special reducer for hydrating the state. Special case for next-redux-wrapper
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth,
                }
            },
        } as any,
    },
})

export const { setAuthState, login, logout } = authSlice.actions

export const isLogged = (state: AppState) => {
    return state.auth.isLogged
}

export const getUser = (state: AppState) => {
    return state.auth.user
}

export const getTokens = (state: AppState) => {
    return {
        token: state.auth.token,
        refresh_token: state.auth.refresh_token,
    }
}
export const getAuth = (state: AppState) => {
    return {
        isLogged: state.auth.isLogged,
        token: state.auth.token,
        refresh_token: state.auth.refresh_token,
    }
}
export const getAll = (state: AppState) => {
    return state.auth
}

export default authSlice.reducer
