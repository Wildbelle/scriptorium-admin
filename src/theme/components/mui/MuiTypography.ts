import { ThemeOptions } from '@mui/material'

export const MuiTypographyStylesOverrides: ThemeOptions['components']['MuiTypography']['styleOverrides'] =
    {
        root: ({ theme }) => ({
            color: theme.palette.text.primary,
        }),
    }

export const MuiTypographyVariants: ThemeOptions['components']['MuiTypography']['variants'] =
    [
        //DISPLAY 4XL
        {
            props: { variant: 'display4XlRegular' },
            style: {
                fontWeight: 400,
                fontSize: '92px',
                lineHeight: '100px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display4XlMedium' },
            style: {
                fontWeight: 500,
                fontSize: '92px',
                lineHeight: '100px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display4XlSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '92px',
                lineHeight: '100px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display4XlBold' },
            style: {
                fontWeight: 700,
                fontSize: '92px',
                lineHeight: '100px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY 3XL
        {
            props: { variant: 'display3XlRegular' },
            style: {
                fontWeight: 400,
                fontSize: '80px',
                lineHeight: '92px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display3XlMedium' },
            style: {
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '92px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display3XlSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '80px',
                lineHeight: '92px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display3XlBold' },
            style: {
                fontWeight: 700,
                fontSize: '80px',
                lineHeight: '92px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY 2XL
        {
            props: { variant: 'display2XlRegular' },
            style: {
                fontWeight: 400,
                fontSize: '72px',
                lineHeight: '90px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display2XlMedium' },
            style: {
                fontWeight: 500,
                fontSize: '72px',
                lineHeight: '90px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display2XlSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '72px',
                lineHeight: '90px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'display2XlBold' },
            style: {
                fontWeight: 700,
                fontSize: '72px',
                lineHeight: '90px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY XL
        {
            props: { variant: 'displayXlRegular' },
            style: {
                fontWeight: 400,
                fontSize: '60px',
                lineHeight: '72px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayXlMedium' },
            style: {
                fontWeight: 500,
                fontSize: '60px',
                lineHeight: '72px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayXlSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '60px',
                lineHeight: '72px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayXlBold' },
            style: {
                fontWeight: 700,
                fontSize: '60px',
                lineHeight: '72px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY LG
        {
            props: { variant: 'displayLgRegular' },
            style: {
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayLgMedium' },
            style: {
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayLgSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayLgBold' },
            style: {
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY MD
        {
            props: { variant: 'displayMdRegular' },
            style: {
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayMdMedium' },
            style: {
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayMdSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.02em;',
            },
        },
        {
            props: { variant: 'displayMdBold' },
            style: {
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.02em;',
            },
        },

        //DISPLAY SM
        {
            props: { variant: 'displaySmRegular' },
            style: {
                fontWeight: 400,
                fontSize: '30px',
                lineHeight: '38px',
            },
        },
        {
            props: { variant: 'displaySmMedium' },
            style: {
                fontWeight: 500,
                fontSize: '30px',
                lineHeight: '38px',
            },
        },
        {
            props: { variant: 'displaySmSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '38px',
            },
        },
        {
            props: { variant: 'displaySmBold' },
            style: {
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '38px',
            },
        },

        //DISPLAY XS
        {
            props: { variant: 'displayXsRegular' },
            style: {
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '32px',
            },
        },
        {
            props: { variant: 'displayXsMedium' },
            style: {
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '32px',
            },
        },
        {
            props: { variant: 'displayXsSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
            },
        },
        {
            props: { variant: 'displayXsBold' },
            style: {
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
            },
        },

        //TEXT XL
        {
            props: { variant: 'textXlRegular' },
            style: {
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
            },
        },
        {
            props: { variant: 'textXlMedium' },
            style: {
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '30px',
            },
        },
        {
            props: { variant: 'textXlSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '30px',
            },
        },
        {
            props: { variant: 'textXlBold' },
            style: {
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '30px',
            },
        },

        //TEXT LG
        {
            props: { variant: 'textLgRegular' },
            style: {
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '28px',
            },
        },
        {
            props: { variant: 'textLgMedium' },
            style: {
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '28px',
            },
        },
        {
            props: { variant: 'textLgSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '28px',
            },
        },
        {
            props: { variant: 'textLgBold' },
            style: {
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '28px',
            },
        },

        //TEXT MD
        {
            props: { variant: 'textMdRegular' },
            style: {
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
            },
        },
        {
            props: { variant: 'textMdMedium' },
            style: {
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
            },
        },
        {
            props: { variant: 'textMdSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
            },
        },
        {
            props: { variant: 'textMdBold' },
            style: {
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
            },
        },

        //TEXT SM
        {
            props: { variant: 'textSmRegular' },
            style: {
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
            },
        },
        {
            props: { variant: 'textSmMedium' },
            style: {
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
            },
        },
        {
            props: { variant: 'textSmSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
            },
        },
        {
            props: { variant: 'textSmBold' },
            style: {
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
            },
        },

        //TEXT XS
        {
            props: { variant: 'textXsRegular' },
            style: {
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '18px',
            },
        },
        {
            props: { variant: 'textXsMedium' },
            style: {
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '18px',
            },
        },
        {
            props: { variant: 'textXsSemiBold' },
            style: {
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '18px',
            },
        },
        {
            props: { variant: 'textXsBold' },
            style: {
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '18px',
            },
        },
    ]
