import { ThemeOptions } from '@mui/material'

export const MuiContainerStyleOverrides: ThemeOptions['components']['MuiContainer']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            backgroundColor: `${theme.palette.background.default} !important`,
            color: theme.palette.text.primary,
            maxWidth: '100% !important',
            width: '100%',
            margin: '0px',
            border: 'none',
        }),
    }
