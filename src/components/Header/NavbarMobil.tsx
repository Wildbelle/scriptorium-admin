import * as React from 'react'

import { Box, MenuItem, Menu, IconButton } from '@mui/material'

import { burgerMenu } from '../../../pages/routes'
import { BurgerButton } from '../../theme/components/custom/BurgerButton'

import { NavItem } from './NavItem'

function NavbarMobil() {
    const [isOpen, setOpen] = React.useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
        isOpen ? setOpen(false) : setOpen(true)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
        setOpen(false)
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
            }}
        >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <BurgerButton rounded toggled={isOpen} toggle={setOpen} />
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    gap: '16px',
                }}
            >
                {burgerMenu.map(page => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <NavItem name={page.name} linkTo={page.linkTo} />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}
export default NavbarMobil
