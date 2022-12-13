import { ThemeOptions } from '@mui/material'

export const MuiCardStyleOverrides: ThemeOptions['components']['MuiCard']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            border: `1px solid ${
                theme.palette.mode === 'dark'
                    ? theme.palette.primary['50']
                    : theme.palette.primary.dark
            }`,
            borderRadius: '12px',
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.default,
            margin: '0px',
            padding: '12px',
            boxShadow:
                '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        }),
    }

export const MuiCardVariants: ThemeOptions['components']['MuiCard']['variants'] =
    [
        {
            props: { variant: 'disabled' },
            style: ({ theme }) => ({
                border: ' 1px solid #D0D5DD',

                backgroundColor: theme.palette.primary.light,

                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'none'
                        : 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',

                '& *': {
                    color: theme.palette.text.disabled + ' !important',
                },
            }),
        },
    ]
