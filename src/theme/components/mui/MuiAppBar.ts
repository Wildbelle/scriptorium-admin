import { ThemeOptions } from '@mui/material'

export const MuiAppBarStyleOverrides: ThemeOptions['components']['MuiAppBar']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            borderBottom: `1px solid ${theme.palette.primary['300']}`,
            borderRadius: '0',
            boxShadow: 'none',
            padding: '0px',
            maxHeight: '96px',
        }),
    }
