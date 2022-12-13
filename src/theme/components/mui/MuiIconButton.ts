import { ThemeOptions } from '@mui/material'

export const MuiIconButtonStyleOverrides: ThemeOptions['components']['MuiIconButton']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            color: theme.palette.text.primary,
            background: 'none',
            '&:hover': {
                backgroundColor: 'none',
            },
        }),
    }
