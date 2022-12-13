import { ThemeOptions } from '@mui/material'

export const MuiTabStyleOverrides: ThemeOptions['components']['MuiTab']['styleOverrides'] =
    {
        root: {
            textTransform: 'none',
            padding: '0 4px 16px 4px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            minWidth: 'auto',
        },
    }
