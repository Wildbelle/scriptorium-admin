import { FC } from 'react'

import { SxProps, Theme, Typography, useTheme } from '@mui/material'

// Headings
interface SemiProps {
    type: 'heading'
    size: '3Xl' | '2Xl' | 'Xl'
    weight: 'Bold'
    content: string
    sx?: SxProps<Theme>
}

// Texts
interface TextProps {
    type: 'text'
    size: 'Xl' | 'Lg' | 'Md' | 'Sm' | 'Xs'
    weight: 'Regular' | 'Medium' | 'SemiBold' | 'Bold'
    content: string
    sx?: SxProps<Theme>
}

interface DisplayProps {
    type: 'display'
    size: '4Xl' | '3Xl' | '2Xl' | 'Xl' | 'Lg' | 'Md' | 'Sm' | 'Xs'
    weight: 'Regular' | 'Medium' | 'SemiBold' | 'Bold'
    content: string
    sx?: SxProps<Theme>
}

const CustomTypo: FC<SemiProps | TextProps | DisplayProps> = props => {
    const { type, size, weight, content } = props
    const theme = useTheme()

    const variant = theme.components.MuiTypography.variants.find(
        variantStyle => variantStyle.props.variant === `${type}${size}${weight}`
    )

    if (!variant) {
        throw new Error(
            `Variant ${variant} is not defined in theme.components.MuiTypography.variants`
        )
    }

    return (
        <Typography
            variant={variant.props.variant}
            variantMapping={variant.props.variantMapping}
            sx={props.sx}
        >
            {content}
        </Typography>
    )
}

export default CustomTypo
