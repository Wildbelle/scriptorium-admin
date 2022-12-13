import { ThemeOptions } from '@mui/material'

export const MuiToolbarStyleOverrides: ThemeOptions['components']['MuiToolbar']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.palette.primary['100']}`,
            borderRadius: '0',
            backgroundColor: theme.palette.background.default,
            boxShadow: 'none',
            width: '100%',
            padding: '3px',
            margin: '0px',
            height: '100%',
        }),
    }
