import '@mui/material/Card'

declare module '@mui/material/Card' {
    interface CardPropsVariantOverrides {
        disabled: true
    }
}
