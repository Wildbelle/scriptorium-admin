import { ThemeOptions } from '@mui/material'

export const MuiTextFieldStyleOverrides: ThemeOptions['components']['MuiTextField']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            '& Muifocused ': {
                color: `${theme.palette.text.primary} !important`,
            },
        }),
    }
