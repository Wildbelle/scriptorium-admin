import * as React from 'react'

import { Badge, Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { signOut } from 'next-auth/react'

import {
    burgerMenu,
    headerMenuLeft,
    headerMenuRight,
} from '../../../pages/routes'
import { BurgerButton } from '../../theme/components/custom/BurgerButton'

import { NavItem } from './NavItem'
import ThemeUpdater from './ThemeUpdater'

function NavbarDesktop() {
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

    const handleSignOut = () => {
        handleCloseNavMenu()
        signOut({ redirect: false })
    }

    return (
        <>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: '64px',
                }}
            >
                {headerMenuLeft.map(page => (
                    <Button
                        variant="underline"
                        key={page.name}
                        onClick={handleCloseNavMenu}
                    >
                        <NavItem name={page.name} linkTo={page.linkTo} />
                    </Button>
                ))}
                <ThemeUpdater />
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: '64px',
                }}
            >
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: '32px',
                    }}
                >
                    {headerMenuRight.map(page => (
                        <Button
                            variant="underline"
                            key={page.name}
                            onClick={handleCloseNavMenu}
                        >
                            <NavItem name={page.name} linkTo={page.linkTo} />
                        </Button>
                    ))}
                    <Button
                        variant="underline"
                        key={'logout'}
                        onClick={handleSignOut}
                    >
                        LogOut
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: '32px',
                    }}
                >
                    <Button variant="underline">
                        <Badge badgeContent={2}>
                            <NavItem name="Panier" linkTo="/cart" />
                        </Badge>
                    </Button>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <BurgerButton
                            rounded
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </IconButton>
                </Box>
            </Box>

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
                    display: { xs: 'none', md: 'block' },
                    gap: '16px',
                }}
            >
                {burgerMenu.map(page => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <NavItem name={page.name} linkTo={page.linkTo} />
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default NavbarDesktop
