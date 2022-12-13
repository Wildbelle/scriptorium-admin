import { ThemeOptions } from '@mui/material'

export const MuiCheckboxStyleOverrides: ThemeOptions['components']['MuiCheckbox']['styleOverrides'] =
    {
        root: ({ theme, ownerState }) => ({
            padding: 0,
            '&:hover': {
                background: 'none',
            },
            ...(ownerState.color && theme.palette[ownerState.color]
                ? {
                      '& svg': {
                          fill: theme.palette[ownerState.color]['300'],
                      },
                      '&.Mui-checked svg': {
                          fill: theme.palette[ownerState.color]['500'],
                      },
                  }
                : {}),
        }),
    }
