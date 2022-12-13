import { PaletteOptions, createTheme } from '@mui/material'

import components from './components/mui'
import { typography } from './foundations'
import defaultPalette from './foundations/colors/palette'

export type AllowedTheme = NonNullable<PaletteOptions['mode']>

export const DEFAULT_THEME: AllowedTheme = 'light'

export const getPrimary = (theme: AllowedTheme) => {
    return {
        primary: {
            main: theme === 'dark' ? '#FCFCFD' : '#101828',
            light: theme === 'dark' ? '#FCFCFD' : '#101828',
            dark: theme === 'dark' ? '#FCFCFD' : '#101828',
            contrastText: theme === 'dark' ? '#101828' : '#FCFCFD',
            '25': theme === 'dark' ? '#101828' : '#FCFCFD',
            '50': theme === 'dark' ? '#1D2939' : '#F9FAFB',
            '100': theme === 'dark' ? '#344054' : '#F2F4F7',
            '200': theme === 'dark' ? '#475467' : '#EAECF0',
            '300': theme === 'dark' ? '#667085' : '#D0D5DD',
            '400': theme === 'dark' ? '#98A2B3' : '#98A2B3',
            '500': theme === 'dark' ? '#D0D5DD' : '#667085',
            '600': theme === 'dark' ? '#EAECF0' : '#475467',
            '700': theme === 'dark' ? '#F2F4F7' : '#344054',
            '800': theme === 'dark' ? '#F9FAFB' : '#1D2939',
            '900': theme === 'dark' ? '#FCFCFD' : '#101828',
        },
    }
}

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...getPrimary('light'),
        secondary: { main: '#2a48f3' },
        text: {
            primary: '#101828',
            secondary: '#98A2B3',
        },
        background: {
            default: '#FCFCFD',
            paper: '#FCFCFD',
        },
        ...defaultPalette,
    },
    components: {
        ...components,
    },
    typography: {
        ...typography,
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...getPrimary('dark'),
        secondary: { main: '#2a48f3' },
        text: {
            primary: '#FCFCFD',
            secondary: '#98A2B3',
        },
        background: {
            default: '#101828',
            paper: '#101828',
        },
        ...defaultPalette,
    },
    components: {
        ...components,
    },
    typography: {
        ...typography,
    },
})
