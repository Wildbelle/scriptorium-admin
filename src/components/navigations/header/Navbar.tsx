import * as React from 'react'

import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Toolbar,
    useTheme,
} from '@mui/material'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { headerMenuRight } from '../../../../pages/routes'
import { isLogged } from '../../../store/authSlice'
import { BurgerButton } from '../../../theme/components/custom/BurgerButton'
import Dropdown from '../../../theme/components/custom/Dropdown'
import { NavItem } from '../utils/NavItem'
import ThemeUpdater from '../utils/ThemeUpdater'

import Subnav from './Subnav'

function Navbar() {
    // const [isOpen, setOpen] = React.useState(false)
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    //     null
    // )

    // const handleOpenSubNav = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget)
    //     isOpen ? setOpen(false) : setOpen(true)
    // }

    // const handleCloseSubNav = () => {
    //     setAnchorElNav(null)
    //     setOpen(false)
    // }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const [isOpen, setOpen] = React.useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenSubNav = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
        isOpen ? setOpen(false) : setOpen(true)
    }

    const handleCloseSubNav = () => {
        setAnchorElNav(null)
        setOpen(false)
    }

    const theme = useTheme()
    const isLoggedIn = useSelector(isLogged)

    return isLoggedIn ? (
        <>
            <Toolbar
                disableGutters
                sx={{ zIndex: 99999, position: 'relative' }}
            >
                <Container>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 1rem ',
                        }}
                    >
                        <Grid
                            item
                            xs={6}
                            md={6}
                            sx={{
                                display: 'flex',
                                gap: '64px',
                            }}
                        >
                            {theme.palette.mode === 'dark' ? (
                                <Image
                                    src="/media/logoLigh.svg"
                                    alt="Scriptorium Logo"
                                    width={116}
                                    height={32}
                                />
                            ) : (
                                <Image
                                    src="/media/logoDark.svg"
                                    alt="Scriptorium Logo"
                                    width={116}
                                    height={32}
                                />
                            )}
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <ThemeUpdater />
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            md={6}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'flex-end',
                                gap: '64px',
                            }}
                        >
                            {/* <IconButton
                                size="medium"
                                edge="end"
                                onClick={handleMenu}
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton> */}
                            {/* <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    My account
                                </MenuItem>
                            </Menu> */}
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                onClick={handleOpenSubNav}
                                color="inherit"
                                sx={{ zIndex: 99999 }}
                            >
                                <BurgerButton
                                    rounded
                                    toggled={isOpen}
                                    toggle={setOpen}
                                />
                            </IconButton>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            md={6}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Dropdown
                                isOpen={false}
                                label="Dashboard"
                                callback={null}
                            />
                            {headerMenuRight.map(page => (
                                <Button
                                    variant="underline"
                                    key={page.name}
                                    onClick={null}
                                    sx={{ padding: '12px' }}
                                >
                                    <NavItem
                                        name={page.name}
                                        linkTo={page.linkTo}
                                    />
                                </Button>
                            ))}

                            <IconButton color="inherit">
                                <Avatar
                                    alt="Remy Sharp"
                                    sizes="md"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>

            <Subnav
                handleOpenSubNav={isOpen}
                handleCloseSubNav={handleCloseSubNav}
            />
        </>
    ) : (
        <Toolbar disableGutters sx={{ zIndex: 99999, position: 'relative' }}>
            <Container>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 1rem ',
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: {
                                xs: 'center',
                                md: 'space-between',
                            },
                            alignItems: 'center',
                            gap: '64px',
                        }}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Image
                                src="/media/logoLight.svg"
                                alt="Scriptorium Logo"
                                width={116}
                                height={32}
                            />
                        ) : (
                            <Image
                                src="/media/logoDark.svg"
                                alt="Scriptorium Logo"
                                width={116}
                                height={32}
                            />
                        )}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ThemeUpdater />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default Navbar
