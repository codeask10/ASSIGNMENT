import { Grid, Typography, Avatar } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import amazon from '../Image/amazon.png'
import apple from '../Image/Apple.png';
import google from '../Image/Google.png';
import microsoft from '../Image/microsoft.png';
import spotify from '../Image/Spotify_Logo.png';
import Button from '@mui/material/Button'; 

const Section = () => {

    return (
        <Box style={{ marginTop: '10vh' }}>
            <Grid container justifyContent="flex-start" alignItems="center" style={{ padding: '15px 32%' }}>
                <Grid item>
                    <Typography variant='h3'>
                        Learn to code --for free
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" alignItems="center" style={{ padding: '15px 32%' }}>
                <Grid item>
                    <Typography variant='h3'>
                        Build Projects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" alignItems="center" style={{ padding: '15px 32%' }}>
                <Grid item>
                    <Typography variant='h3'>
                        Earn certifications.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" alignItems="center" style={{ padding: '15px 32%' }}>
                <Grid item>
                    <Typography variant='body1' style={{ fontSize: "17px" }}>
                        Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" alignItems="center" style={{ marginTop: '10px', paddingLeft: '32%' }}>
                <Grid item >
                    <img src={apple} alt="Apple Icon" style={{ width: '5%', height: 'auto', marginRight: '30px' }} />
                    <img src={google} alt="Google Icon" style={{ width: '8%', height: 'auto', marginRight: '30px' }} />
                    <img src={microsoft} alt="Microsoft Icon" style={{ width: '12%', height: 'auto', marginRight: '30px' }} />
                    <img src={spotify} alt="Spotify Icon" style={{ width: '10%', height: 'auto', marginRight: '30px' }} />
                    <img src={amazon} alt="Amazon Icon" style={{ width: '10%', height: 'auto', marginRight: '30px' }} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" style={{  margin:'20px', padding: '15px 32%' }}>
                <Grid item>
                    <Button variant="contained" sx={{ color: "#000000", backgroundColor: "#fdc345" }}>
                        Get started (it's free)
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Section