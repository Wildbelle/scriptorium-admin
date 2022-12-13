import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// export const plaak = localFont({
//     src: [
//         {
//             path: './205-plaak44.otf',
//             weight: '700',
//             style: 'normal',
//         },
//     ],
// })

const typography = {
    HtmlFontSize: 16,
    pxTorem: (px: number) => `${px / 16}rem`,
    fontFamily: inter.style.fontFamily,
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    small: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.02em',
    },

    h1: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 700,
        fontSize: '5.75rem',
        lineHeight: '100px',
        letterSpacing: '-0.02em',
    },
    h2: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 700,
        fontSize: '5rem',
        lineHeight: '92px',
        letterSpacing: '-0.02em',
    },
    h3: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 700,
        fontSize: '4.5rem',
        lineHeight: '90px',
        letterSpacing: '-0.02em',
    },
    h4: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 700,
        fontSize: '3.75rem',
        lineHeight: '72px',
        letterSpacing: '-0.02em',
    },
    h5: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: '60px',
        letterSpacing: '-0.02em',
    },
    h6: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '2.25rem',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
    },
    subtitle1: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '1.875rem',
        lineHeight: '38px',
        letterSpacing: '0',
    },
    subtitle2: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: '32px',
        letterSpacing: '0',
    },
    body1: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '24px',
        letterSpacing: '0',
    },
    body2: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0',
    },
    button: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0',
    },
    caption: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '18px',
        letterSpacing: '0.08333em',
    },
    overline: {
        fontFamily: inter.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '18px',
        letterSpacing: '0.08333em',
    },
}

export default typography
