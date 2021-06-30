import React, { Component, useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Nav from '../components/NavSearch'
import CourseDetailCard from '../components/CourseDetailCard';
export class CourseDetail extends Component {
    render() {

          return ( 
                <div>
                    <Nav />
                    <Grid  className="Container" >
                        <CourseDetailCard style={{width:"20vw"}} />     
                    </Grid>
                </div>
        );
    }
}

    export default CourseDetail