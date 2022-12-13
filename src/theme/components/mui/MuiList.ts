import { ThemeOptions } from '@mui/material'

const MuiListStyleOverrides: ThemeOptions['components']['MuiList']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            minWidth: '250px',
            '.title': {
                color: theme.palette.secondary[400],
                textTransform: 'uppercase',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '10px',
                lineHeight: '18px',
                padding: '0 8px',
                '&:not(:first-of-type)': {
                    paddingTop: '4px',
                    borderTop: `1px solid ${theme.palette.secondary['100']}`,
                },
            },
        }),
    }

export default MuiListStyleOverrides
