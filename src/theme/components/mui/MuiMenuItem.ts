import { ThemeOptions } from '@mui/material'

const MuiMenuItemStyleOverrides: ThemeOptions['components']['MuiMenuItem']['styleOverrides'] =
    {
        root: {
            borderRadius: '8px',
            '&.no-hover': {
                cursor: 'normal',
                background: 'none',
            },
        },
    }

export default MuiMenuItemStyleOverrides
