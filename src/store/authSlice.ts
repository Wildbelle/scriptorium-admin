import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AppState } from './store'

// Type for our state
export interface AuthState {
    isLogged: boolean
    token?: string
    refresh_token?: string
}

// Initial state
const initialState: AuthState = {
    isLogged: false,
    token: '',
    refresh_token: '',
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

export const selectAuthState = (state: AppState) => {
    return state.auth
}

export default authSlice.reducer
