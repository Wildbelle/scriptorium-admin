import * as React from 'react'

import { AppBar, Container } from '@mui/material'

import Navbar from './Navbar'

function HeaderNavigation() {
    return (
        <AppBar className="HeaderNavigation" position="static">
            <Navbar />
        </AppBar>
    )
}
export default HeaderNavigation
