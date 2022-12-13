import '@mui/material/Chip'

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
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

    interface ChipPropsVariantOverrides {
        cubed: true
        'button-outlined': true
        'button-icon': true
        unset: true
    }
}
