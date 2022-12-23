import { Padding } from '@mui/icons-material'
import {
    Box,
    Button,
    Divider,
    Grid,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material'
import { Container } from '@mui/system'

import { footerMenuLeft, footerMenuRight } from '../../../../pages/routes'
import { NavItem } from '../utils/NavItem'
import PaymentMethodList from '../utils/PaymentMethodList'
import SocialNetworks from '../utils/SocialNetworks'

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <SocialNetworks />
                <Divider />
                <Grid
                    className="footer-content"
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '2rem 0px',
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: 'grid', gap: '16px' }}
                    >
                        <Typography variant="displayMdRegular" component="h6">
                            Abonnez-vous à notre newsletter pour rester au
                            courant des dernières nouveautés.
                        </Typography>
                        <TextField
                            label="Votre adresse email"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}></Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '32px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '1.5rem 0px',
                            }}
                        >
                            <Typography
                                variant="textSmSemiBold"
                                color="textSecondary"
                            >
                                Menu
                            </Typography>
                            <List
                                sx={{
                                    gap: '16px',
                                }}
                            >
                                {footerMenuLeft.map(page => (
                                    <Button variant="underline" key={page.name}>
                                        <NavItem
                                            name={page.name}
                                            linkTo={page.linkTo}
                                        />
                                    </Button>
                                ))}
                            </List>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '32px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '1.5rem 0px',
                            }}
                        >
                            <Typography
                                variant="textSmSemiBold"
                                color="textSecondary"
                            >
                                Support
                            </Typography>
                            <List
                                sx={{
                                    gap: '16px',
                                }}
                            >
                                {footerMenuRight.map(page => (
                                    <Button variant="underline" key={page.name}>
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
                <Grid
                    className="footer-end"
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '2rem 0px 1.5rem 0',
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <PaymentMethodList />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="textSmRegular"
                            color="textSecondary"
                        >
                            © 2021 - Tous droits réservés
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="textSmRegular"
                            color="textSecondary"
                        >
                            Website by WildBelle Studio.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
