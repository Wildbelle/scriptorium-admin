import { ThemeOptions } from '@mui/material'

const MuiPaperStyleOverrides: ThemeOptions['components']['MuiPaper']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            backgroundColor: `${theme.palette.background.default} !important`,
            color: theme.palette.text.primary,
            borderRadius: '8px',
            padding: '4px',
            '&.no-radius': {
                borderRadius: 0,
            },
        }),
    }

export default MuiPaperStyleOverrides
