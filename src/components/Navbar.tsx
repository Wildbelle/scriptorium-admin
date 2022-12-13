import { FC } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

import CustomTypography from '../theme/foundations/fonts/CustomType'

type ToggleColorModeProps = () => void

type NavbarProps = {
    toggleColorMode: ToggleColorModeProps
}

const Navbar: FC<NavbarProps> = ({ toggleColorMode }) => {
    const theme = useTheme()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <CustomTypography
                    type="display"
                    size="Xl"
                    weight="SemiBold"
                    content="MUI"
                />
                <div>
                    {theme.palette.mode} actual
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => {
                            toggleColorMode()
                        }}
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <LightModeIcon />
                        ) : (
                            <DarkModeIcon />
                        )}
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
