import { ThemeOptions } from '@mui/material'

export const MuiButtonStyleOverrides: ThemeOptions['components']['MuiButton']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            color: theme.palette.text.primary,
            fontSize: theme.typography.button.fontSize,
            lineHeight: theme.typography.button.lineHeight,
            letterSpacing: theme.typography.button.letterSpacing,
            fontWeight: theme.typography.button.fontWeight,
            textTransform: 'none',
            padding: '6px 20px',
        }),
        textPrimary: ({ theme }) => ({
            borderRadius: 0,
            borderBottom: '1px solid',
            borderColor: theme.palette.primary['300'],
            '&:hover': {
                borderBottom: '2px solid',
                borderColor: theme.palette.primary['900'],
            },
            '&:active': {
                borderBottom: '2px solid',
                borderColor: theme.palette.primary['900'],
            },
        }),
        containedPrimary: ({ theme }) => ({
            color: theme.palette.primary['25'],
            borderRadius: 60,
            border: '1px solid',
            background: theme.palette.primary['900'],
            borderColor: theme.palette.primary['900'],
            '&:hover': {
                background: theme.palette.primary['25'],
                borderColor: theme.palette.primary['900'],
                color: theme.palette.text.primary,
            },
            '&:active': {
                background: theme.palette.primary['25'],
                borderColor: theme.palette.primary['900'],
                color: theme.palette.text.primary,
            },
        }),
        outlinedPrimary: ({ theme }) => ({
            borderRadius: 60,
            border: '1px solid',
            background: theme.palette.primary['25'],
            borderColor: theme.palette.primary['900'],
            '&:hover': {
                background: theme.palette.primary['900'],
                borderColor: theme.palette.primary['900'],
                color: theme.palette.primary['25'],
            },
            '&:active': {
                background: theme.palette.primary['900'],
                borderColor: theme.palette.primary['900'],
                color: theme.palette.primary['25'],
            },
        }),
    }

export const MuiButtonVariants: ThemeOptions['components']['MuiButton']['variants'] =
    [
        {
            props: {
                variant: 'unstyled',
            },
            style: ({ theme }) => ({
                color: theme.palette.text.primary,
                fontSize: theme.typography.button.fontSize,
                lineHeight: theme.typography.button.lineHeight,
                letterSpacing: theme.typography.button.letterSpacing,
                fontWeight: theme.typography.button.fontWeight,
                padding: 0,
                margin: 0,
                background: 'none',

                '&:hover': {
                    color: theme.palette.text.secondary,
                    background: 'none',
                },
                '&:active': {
                    color: theme.palette.text.secondary,
                    background: 'none',
                },
                '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                },
            }),
        },
        {
            props: { variant: 'underline' },
            style: ({ theme }) => ({
                color: theme.palette.text.primary,
                fontSize: theme.typography.button.fontSize,
                lineHeight: theme.typography.button.lineHeight,
                letterSpacing: theme.typography.button.letterSpacing,
                fontWeight: theme.typography.button.fontWeight,
                padding: 0,
                margin: 0,
                background: 'none',
                width: 'fit-content',
                minWidth: 'fit-content',

                '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                },
                '&:hover': {
                    outline: 'none',
                    boxShadow: 'none',
                    background: 'none',

                    '&::after': {
                        width: '100%',
                    },
                },
                '&:active': {
                    background: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    transform: 'scaleX(0)',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: theme.palette.text.primary,
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.4s ease-out',
                },
                '&:hover:after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                    borderRadius: '9em',
                },
                '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                },
            }),
        },
    ]
