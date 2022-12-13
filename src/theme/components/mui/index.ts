import { ThemeOptions } from '@mui/material'

import { MuiAlertStyleOverrides } from './MuiAlert'
import { MuiAppBarStyleOverrides } from './MuiAppBar'
import { MuiBadgeStyleOverrides } from './MuiBadge'
import { MuiButtonStyleOverrides, MuiButtonVariants } from './MuiButton'
import { MuiCardStyleOverrides, MuiCardVariants } from './MuiCard'
import { MuiCardContentStyleOverrides } from './MuiCardContent'
import { MuiCardHeaderStyleOverrides } from './MuiCardHeader'
import { MuiCheckboxStyleOverrides } from './MuiCheckbox'
import { MuiChipStyleOverrides, MuiChipVariants } from './MuiChip'
import { MuiContainerStyleOverrides } from './MuiContainer'
import MuiListStyleOverrides from './MuiList'
import MuiMenuItemStyleOverrides from './MuiMenuItem'
import MuiPaperStyleOverrides from './MuiPaper'
import { MuiTabStyleOverrides } from './MuiTab'
import { MuiTabsStyleOverrides } from './MuiTabs'
import { MuiToolbarStyleOverrides } from './MuiToolbar'
// import {
//     MuiTypographyStyleOverrides,
//     MuiTypographyVariants,
// } from './mui/MuiTypography'

const components: ThemeOptions['components'] = {
    MuiAlert: {
        styleOverrides: MuiAlertStyleOverrides,
    },
    MuiButton: {
        styleOverrides: MuiButtonStyleOverrides,
        variants: MuiButtonVariants,
    },
    MuiCard: {
        styleOverrides: MuiCardStyleOverrides,
        variants: MuiCardVariants,
    },
    MuiCardHeader: {
        styleOverrides: MuiCardHeaderStyleOverrides,
    },
    MuiCardContent: {
        styleOverrides: MuiCardContentStyleOverrides,
    },
    MuiCheckbox: {
        styleOverrides: MuiCheckboxStyleOverrides,
    },
    MuiChip: {
        styleOverrides: MuiChipStyleOverrides,
        variants: MuiChipVariants,
    },
    MuiList: {
        styleOverrides: MuiListStyleOverrides,
    },
    MuiMenuItem: {
        styleOverrides: MuiMenuItemStyleOverrides,
    },
    MuiTab: {
        styleOverrides: MuiTabStyleOverrides,
    },
    MuiTabs: {
        styleOverrides: MuiTabsStyleOverrides,
    },
    MuiPaper: {
        styleOverrides: MuiPaperStyleOverrides,
    },
    MuiAppBar: {
        styleOverrides: MuiAppBarStyleOverrides,
    },
    // MuiTypography: {
    //     styleOverrides: MuiTypographyStyleOverrides,
    //     variants: MuiTypographyVariants,
    // },
    MuiContainer: {
        styleOverrides: MuiContainerStyleOverrides,
    },
    MuiToolbar: {
        styleOverrides: MuiToolbarStyleOverrides,
    },
    MuiBadge: {
        styleOverrides: MuiBadgeStyleOverrides,
    },
}

export default components
