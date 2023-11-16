import  {React,useState}from 'react';
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
const defaultTheme = createTheme();

const Signin = () => {
    const [signIn, setSignIn] = useState({ firstName: "", lastName: "", email: "", password: "", cPassword: "" });
    const navigate = useNavigate();
    const googleAuth = () => {
		window.open(
			`http://localhost:5003/auth/google/callback`,
			"_self"
		);
	};
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (signIn.password === signIn.cPassword) {
            const response = await fetch(`http://localhost:5003/api/user/Signin`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName: signIn.firstName, lastName: signIn.lastName, email: signIn.email, password: signIn.password })
            });
            // eslint-disable-next-line 
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('token', json.authtoken)
                 navigate('/WelcomePage');
                alert(" Account created successfully ", "success");
            }
            else {
                alert("Sorry a user with this email already exists", "danger")
            }
        }
        else {
            alert("Confirm Password does not match", "danger");
        }
    };
    const handleChange = (event) => {
        setSignIn({ ...signIn, [event.target.name]: event.target.value });
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    value={signIn.firstName}
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    value={signIn.lastName}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={signIn.email}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={signIn.password}

                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="cPassword"
                                    onChange={handleChange}
                                    value={signIn.cPassword}
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}> Or</Typography>
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}  
                            onClick={googleAuth}
                        >
                            <GoogleIcon sx={{ mr: 2 }} />Sign in with Google
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Signin