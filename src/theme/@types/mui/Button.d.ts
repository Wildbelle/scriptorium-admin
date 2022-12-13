import '@mui/material/Button'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        unstyled: true
        underline: true
    }
}
