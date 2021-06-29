import React, { Component, useState } from 'react'
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import Course from '../components/course';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import Nav from '../components/NavSearch'
import CourseDetailCard from '../components/CourseDetailCard';
import Tab from '../components/tab'


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
