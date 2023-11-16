import { React, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactImg from '../Image/React.png'
import '../CSS/Welcome.css';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Welcome = () => {
    const [courses, setCourses] = useState([]);
    const fetchData = async () => {
        console.log("fetchdata")
        const response = await fetch(`http://localhost:5003/api/Course/fetchdata`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        });

        const data = await response.json();

        // Check if 'data.courses' is an array before setting the state
        if (Array.isArray(data.courses)) {
            setCourses(data.courses);
        }
        console.log(courses);
    }
    useEffect(() => {
        // Fetch courses from the server when the component mounts
        fetchData();
        // eslint-disable-next-line

    }, []);
    return (
        <Grid container  justifyContent="center" alignItems="center" spacing={3} style={{ marginTop: '50px' }}>
            <Grid item xs={12} textAlign="center">
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                    Welcome to freeCodeCamp.org
                </Typography>
            </Grid>

            <Grid item xs={12} textAlign="center" sx={{ margin: "30px 0px" }}>
                <Typography component="h3" variant="h4" padding="10px 30%">
                    "I Have not failed. I've just found 10,000 ways that won't work."
                </Typography>
                <Typography variant='h6'>
                    -Thomas A.Edison
                </Typography>
            </Grid>

            <Grid item xs={12} textAlign="center" sx={{ margin: "30px 0px" }}>
                {courses.map((course, index) => (
                    <Grid item key={index} sx={{margin:"auto",padding:"20px 0%", paddingLeft:"30%"}}>
                        <Paper elevation={3} style={{ padding: '20px', textAlign: 'left', width:'60%',backgroundColor: "#d0d0d5", border: '2px solid' }}>
                            {/* Display course data */}
                            <Typography variant="h5" gutterBottom>
                            <img src={reactImg} style={{ marginRight: '10px',height:'30px',width:"30px", }} />{course.name} ({course.duration} hours)
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>

    );
}

export default Welcome;
