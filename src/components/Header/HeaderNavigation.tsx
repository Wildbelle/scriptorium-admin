import * as React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Box,
    IconButton,
    Container,
    MenuItem,
    Toolbar,
    Menu,
    Button,
} from '@mui/material'

import {
    burgerMenu,
    headerMenuLeft,
    headerMenuRight,
} from '../../../pages/routes'
import { BurgerButton } from '../../theme/components/custom/BurgerButton'

import NavbarDesktop from './NavbarDesktop'
import NavbarMobil from './NavbarMobil'
import { NavItem } from './NavItem'
import ThemeUpdater from './ThemeUpdater'

function HeaderNavigation() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMobilMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMobilMenu = () => {
        setAnchorElNav(null)
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <NavbarMobil />
                    <NavbarDesktop />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default HeaderNavigation
