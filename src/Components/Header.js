import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link,useLocation,useNavigate  } from 'react-router-dom';

const customStyles = {
    fontFamily: 'sans-serif',
    display: 'flex',
    margin: 'auto',
    fontSize: '1.5em'

};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '38ch',
            },
        },
    },
}));


const Header = () => {

    const navigate = useNavigate();

    const handleLogout=(e)=>{
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <React.Fragment>
            <AppBar position="static" sx={{ background: "#000000" }} >
                <Toolbar>
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search 9,000+ tutorials"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Typography style={customStyles}>
                        FreeCodeCamp <FontAwesomeIcon icon={faFreeCodeCamp} style={{ marginLeft: "10px", color: '#ffffff', fontSize: '1.5em' }} />
                    </Typography>
                    <Grid item direction='row' spacing={{ xs: 1, md: 1 }} sx={{ marginRight: '0px' }}>
                        <Button variant="outlined" style={{ color: "#FFFFFF", borderColor: "#FFFFFF", margin: '12px' }}>
                            Menu
                        </Button>
                        {(!localStorage.getItem('token'))?
                        <Button variant="contained" sx={{ color: "#ffffff", borderColor: "#f7b83f", backgroundColor: "#fdc345" }}>
                            <Link to="/Signin"> Signin</Link>
                        </Button>:<Button variant="contained" onClick={handleLogout} sx={{ color: "#ffffff", borderColor: "#f7b83f", backgroundColor: "#fdc345" }}>
                             Logout
                        </Button>}
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header