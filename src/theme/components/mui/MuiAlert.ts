import { ThemeOptions } from '@mui/material'

export const MuiAlertStyleOverrides: ThemeOptions['components']['MuiAlert']['styleOverrides'] =
    {
        root: ({ theme, ownerState }) => ({
            ...(ownerState.severity && {
                backgroundColor: theme.palette[ownerState.severity]['50'],
                color: theme.palette[ownerState.severity]['700'],
            }),
        }),
        icon: ({ theme, ownerState }) => ({
            ...(ownerState.severity && {
                svg: {
                    color: theme.palette[ownerState.severity]['600'],
                },
            }),
        }),
    }
