import { ThemeOptions } from '@mui/material'

export const MuiCardContentStyleOverrides: ThemeOptions['components']['MuiCardContent']['styleOverrides'] =
    {
        root: {
            padding: 0,
            marginTop: '10px',
            color: 'inherit',

            ':last-child': {
                padding: 0,
            },
        },
    }
