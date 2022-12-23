import * as React from 'react'

import {
    Badge,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Toolbar,
} from '@mui/material'
import Image from 'next/image'

import { headerMenuLeft, headerMenuRight } from '../../../../pages/routes'
import { BurgerButton } from '../../../theme/components/custom/BurgerButton'
import { NavItem } from '../utils/NavItem'
import ThemeUpdater from '../utils/ThemeUpdater'

import Subnav from './Subnav'

function Navbar() {
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

    return (
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
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: '64px',
                            }}
                        >
                            <Image
                                src="/media/logo.svg"
                                alt="Scriptorium Logo"
                                width={116}
                                height={32}
                            />
                            {headerMenuLeft.map(page => (
                                <Button
                                    variant="underline"
                                    key={page.name}
                                    onClick={handleCloseSubNav}
                                >
                                    <NavItem
                                        name={page.name}
                                        linkTo={page.linkTo}
                                    />
                                </Button>
                            ))}
                            <ThemeUpdater />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'space-between',
                                gap: '64px',
                            }}
                        >
                            {/* {!isOpen ? ( */}
                            <>
                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        gap: '32px',
                                    }}
                                >
                                    {!isOpen ? (
                                        <>
                                            {headerMenuRight.map(page => (
                                                <Button
                                                    variant="underline"
                                                    key={page.name}
                                                    onClick={handleCloseSubNav}
                                                >
                                                    <NavItem
                                                        name={page.name}
                                                        linkTo={page.linkTo}
                                                    />
                                                </Button>
                                            ))}
                                        </>
                                    ) : null}
                                </Box>

                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        gap: '32px',
                                    }}
                                >
                                    {!isOpen ? (
                                        <>
                                            <Button variant="underline">
                                                <Badge badgeContent={2}>
                                                    <NavItem
                                                        name="Panier"
                                                        linkTo="/cart"
                                                    />
                                                </Badge>
                                            </Button>
                                        </>
                                    ) : null}
                                </Box>
                            </>
                            {/* ) : null} */}
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    gap: '32px',
                                }}
                            >
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
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>

            <Subnav
                handleOpenSubNav={isOpen}
                handleCloseSubNav={handleCloseSubNav}
            />
        </>
    )
}

export default Navbar
