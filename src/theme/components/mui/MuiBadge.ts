import { ThemeOptions } from '@mui/material'

export const MuiBadgeStyleOverrides: ThemeOptions['components']['MuiBadge']['styleOverrides'] =
    {
        badge: ({ theme }) => ({
            fontWeight: theme.typography.button.fontWeight,
            fontSize: '0.68rem',
            lineHeight: theme.typography.button.lineHeight,
            letterSpacing: theme.typography.button.letterSpacing,
            transform: 'scale(1) translate(80%, -40%)',
        }),
    }
