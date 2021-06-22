import React, { Component, useState } from 'react'
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import Course from '../components/course';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import Nav from '../components/Navbar'


export class Dashboard extends Component {
    render() {
          return ( 
                <div>
                    <Nav />
                    <Grid  className="topContainer" >
                        <Typography  gutterBottom>
                            Enrolled Courses
                            <hr className="hr" />
                        </Typography>
                        <Link href="CourseList" >
                        <Button variant="outlined" size="small">
                            Join new Course
                        </Button>
                        </Link>
                    </Grid>
                    <Course />
                    <Grid  className="topContainer" >
                        <Typography  gutterBottom>
                            Createrd Courses
                            <hr className="hr" />
                        </Typography>
                        <Link href="createCourse" >
                        <Button variant="outlined" size="small">
                            Create new Course
                        </Button>
                        </Link>
                    </Grid>
                    <Course />
                    <Grid  className="topContainer" >
                    
            </Grid>

           
                </div>     
         

           
       
        );
    }
}

    export default Dashboard
