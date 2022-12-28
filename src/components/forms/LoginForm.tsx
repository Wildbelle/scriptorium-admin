import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    useTheme,
} from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { axiosInstance } from '../../service/axios'
import { getTokens, getUser, login } from '../../store/authSlice'
import CustomTypo from '../../theme/components/custom/CustomTypo'

const LoginForm = () => {
    const { token, refresh_token } = useSelector(getTokens)
    const me = useSelector(getUser)
    const dispatch = useDispatch()
    const theme = useTheme()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            handleSubmit(values)
        },
    })

    const handleSubmit = values => {
        axiosInstance.post('/login', values).then(res => {
            if (res.data) {
                const stateData = res.data
                axiosInstance
                    .get('/me', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then(res => {
                        stateData.user = res.data
                        dispatch(login(stateData))
                    })
            }
        })
        // console.log(values)
    }
    const test1 =
        'MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard mui-style-17j3szz-MuiFormLabel-root-MuiInputLabel-root'

    const fetchUsers = () => {
        axiosInstance
            .get('/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                console.log(res.data)
            })
    }

    //const checkbox mui 16px size
    const checkboxStyle = {
        '& .MuiSvgIcon-root': {
            width: '16px',
            height: '16px',
        },
        '& .MuiCheckbox-root': {
            padding: '0px',
        },
    }

    return (
        <Grid container>
            <form onSubmit={formik.handleSubmit}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        width: '100%',
                        padding: '48px 16px',
                    }}
                >
                    <CustomTypo
                        type="display"
                        size="Xs"
                        weight="SemiBold"
                        content="Connexion"
                        sx={{ color: theme.palette.primary.main, mb: '2px' }}
                    />
                    <CustomTypo
                        type="text"
                        size="Md"
                        weight="Regular"
                        content="Bon retour! Veuillez saisir vos coordonnées."
                        sx={{ color: theme.palette.primary['500'], mb: '32px' }}
                    />
                    <TextField
                        variant="standard"
                        label="Email"
                        placeholder="Entrez votre email"
                        name="username"
                        type="email"
                        inputMode="email"
                        sx={{ width: '100%', mb: '56px' }}
                        InputLabelProps={{
                            sx: {
                                '&.MuiInputLabel-shrink': {
                                    transform: 'translate(0, -17px) scale(1)',
                                },
                            },
                        }}
                    />
                    <TextField
                        variant="standard"
                        label="Password"
                        name="password"
                        placeholder="••••••••"
                        type="password"
                        inputMode="text"
                        sx={{ width: '100%' }}
                        InputLabelProps={{
                            sx: {
                                '&.MuiInputLabel-shrink': {
                                    transform: 'translate(0, -17px) scale(1)',
                                },
                            },
                        }}
                    />
                    <Box sx={{ width: '100%', display: 'flex' }}>
                        {/* checkbox remember me */}
                        <FormControlLabel
                            control={<Checkbox style={{}} />}
                            label="Se souvenir de moi"
                        />
                        {/* <CheckBox />
                        <CustomTypo
                            type="text"
                            size="Sm"
                            weight="Regular"
                            content="Se souvenir de moi"
                            sx={{ color: theme.palette.primary['500'] }}
                        /> */}
                        {/* forgot password */}
                        <CustomTypo
                            type="text"
                            size="Sm"
                            weight="Regular"
                            content="Mot de passe oublié?"
                            sx={{
                                color: theme.palette.primary['500'],
                                ml: 'auto',
                            }}
                        />
                    </Box>
                    <button type="submit">Submit</button>
                    <button onClick={fetchUsers}>Fetch Users</button>
                </Grid>
            </form>
        </Grid>
    )
}

export default LoginForm
