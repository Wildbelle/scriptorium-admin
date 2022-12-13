import { ThemeOptions } from '@mui/material'

export const MuiTabsStyleOverrides: ThemeOptions['components']['MuiTabs']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            marginBottom: '22px',
            borderBottom: `1px solid ${theme.palette.secondary[200]}`,
        }),
        flexContainer: {
            gap: '16px',
        },
    }
