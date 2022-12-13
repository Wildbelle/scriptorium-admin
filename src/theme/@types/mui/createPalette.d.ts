import '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        blue?: PaletteColor
        blueGray?: PaletteColor
        blueLight?: PaletteColor
        indigo?: PaletteColor
        purple?: PaletteColor
        pink?: PaletteColor
        pinkish?: PaletteColor
        orange?: PaletteColor
        unset?: PaletteColor
    }

    interface PaletteOptions {
        blue?: PaletteColorOptions
        blueGray?: PaletteColorOptions
        blueLight?: PaletteColorOptions
        indigo?: PaletteColorOptions
        purple?: PaletteColorOptions
        pink?: PaletteColorOptions
        pinkish?: PaletteColorOptions
        orange?: PaletteColorOptions
        unset?: PaletteColorOptions
    }

    interface ColorSchemeOverrides {
        blue: true
        blueGray: true
        blueLight: true
        indigo: true
        purple: true
        pink: true
        pinkish: true
        orange: true
        unset: true
    }
}
