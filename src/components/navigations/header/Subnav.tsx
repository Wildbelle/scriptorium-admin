import {
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    Grid,
    List,
    Typography,
} from '@mui/material'

import {
    burgerMenu,
    burgerMenuLeft,
    burgerMenuRight,
} from '../../../../pages/routes'
import { NavItem } from '../utils/NavItem'
import PaymentMethodList from '../utils/PaymentMethodList'

function Subnav({ handleCloseSubNav, handleOpenSubNav }) {
    return (
        <Drawer
            anchor={'top'}
            open={handleOpenSubNav}
            onClose={handleCloseSubNav}
        >
            <Container>
                <Grid
                    className="subnav-header"
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}
                >
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                marginTop: '8.75rem',
                                padding: '24px 0px',
                            }}
                        >
                            <PaymentMethodList />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                marginTop: '8.75rem',
                                padding: '1.5rem 0px',
                            }}
                        >
                            <List
                                sx={{
                                    gap: '16px',
                                }}
                            >
                                {burgerMenu.map(page => (
                                    <Button
                                        variant="underline"
                                        key={page.name}
                                        onClick={handleCloseSubNav}
                                    >
                                        <NavItem
                                            name={page.name}
                                            linkTo={page.linkTo}
                                        />
                                    </Button>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    className="subnav-footer"
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                padding: '1.5rem 0px',
                            }}
                        >
                            <Typography variant="display4XlMedium">
                                MMXXIII
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                padding: '1.5rem 0px',
                            }}
                        >
                            <List
                                sx={{
                                    gap: '16px',
                                }}
                            >
                                {burgerMenuLeft.map(page => (
                                    <Button
                                        variant="underline"
                                        key={page.name}
                                        onClick={handleCloseSubNav}
                                    >
                                        <NavItem
                                            name={page.name}
                                            linkTo={page.linkTo}
                                        />
                                    </Button>
                                ))}
                            </List>
                            <List
                                sx={{
                                    gap: '16px',
                                }}
                            >
                                {burgerMenuRight.map(page => (
                                    <Button
                                        variant="underline"
                                        key={page.name}
                                        onClick={handleCloseSubNav}
                                    >
                                        <NavItem
                                            name={page.name}
                                            linkTo={page.linkTo}
                                        />
                                    </Button>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Drawer>
    )
}

export default Subnav
