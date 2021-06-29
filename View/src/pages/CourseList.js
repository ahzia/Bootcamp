import React, { Component, useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Course from '../components/course';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import NavSearch from '../components/NavSearch';




export class CourseList extends Component {
    render() {
          return ( 
            <div>
            <NavSearch />
            <Grid  className="topContainer" >
                <Typography  gutterBottom>
                    List of Top Courses
                    <hr className="hr" />
                </Typography>
            </Grid>
            <Course />
            <br />
            <Course />
            <br />
            <Course />
        </div>    
         

           
       
        );
    }
}

    export default CourseList

