import About from './menu/About'
import Cart from './product/Cart'
import PrintKit from './product/Printkit'
import Products from './product/Products'
import Contact from './support/Contact'
import Legal from './support/Legal'

import Home from '.'

export const routes = [
    // Menu
    { name: 'Home', linkTo: '/', component: Home },
    { name: 'About', linkTo: '/about', component: About },
    // Products
    { name: 'Products', linkTo: '/products', component: Products },
    { name: 'Print kit', linkTo: '/products/printkit', component: PrintKit },
    { name: 'Panier', linkTo: '/cart', component: Cart },
    // Support
    { name: 'Contact', linkTo: '/contact', component: Contact },
    { name: 'Legal', linkTo: '/legal', component: Legal },
]

// Header navigation
export const headerMenuLeft = [{ name: 'A propos', linkTo: '/about' }]

export const headerMenuRight = [
    { name: 'Commander', linkTo: '/#products' },
    { name: 'Print Kit', linkTo: '/products/printkit' },
]

// Burger navigation
export const burgerMenu = [
    { name: 'Produits', linkTo: '/products/' },
    { name: 'Print Kit', linkTo: '/products/printkit' },
    { name: 'Panier', linkTo: '/cart' },
]

export const burgerMenuLeft = [
    { name: 'A propos', linkTo: '/about' },
    { name: 'Studio', linkTo: '/https://www.studio-octopus.fr' },
    { name: 'Contact', linkTo: '/contact' },
]

export const burgerMenuRight = [
    { name: 'Conditions', linkTo: '/legal/terms' },
    { name: 'Confidentialité', linkTo: '/legal/privacy' },
    { name: 'Cookies', linkTo: '/legal/cookies' },
]

// Footer navigation
export const footerMenuLeft = [
    { name: 'Produits', linkTo: '/products' },
    { name: 'Print kit', linkTo: '/products/printkit' },
    { name: 'A propos', linkTo: '/about' },
    { name: 'Studio', linkTo: '/https://www.studio-octopus.fr' },
]

export const footerMenuRight = [
    { name: 'Conditions', linkTo: '/legal/terms' },
    { name: 'Confidentialité', linkTo: '/legal/privacy' },
    { name: 'Cookies', linkTo: '/legal/cookies' },
    { name: 'Contact', linkTo: '/contact' },
]
