import { ThemeOptions } from '@mui/material'

export const MuiCardHeaderStyleOverrides: ThemeOptions['components']['MuiCardHeader']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            padding: 0,
            fontWeight: 600,
            fontSize: '80px',
            fontStyle: 'normal',
            lineHeight: '92px',
            letterSpacing: '-0.02em;',
            color: theme.palette.text.primary,
        }),
        avatar: {
            margin: 0,
        },
        action: {
            margin: 0,
        },
        title: ({ theme }) => ({
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '80px',
            fontStyle: 'normal',
            lineHeight: '92px',
            letterSpacing: '-0.02em;',
        }),
    }
