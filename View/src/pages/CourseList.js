import React, { Component, useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Course from '../components/Course';
import NavSearch from '../components/NavSearch';
import Loading from '../components/loading'
import {getAllCourses} from '../api/server'
export class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCourses: null
        }
    }
    componentDidMount() {
        if(this.props.isSignedIn === null){
            return <Loading uiLoading="true" />
        }
        getAllCourses().then((response) => {
            this.setState({
                allCourses: response
            });
        });
    }
    render() {
          return ( 
            <div>
            <NavSearch />
            <Grid  className="topContainer" >
                <Typography  gutterBottom>
                    List of all Courses
                    <hr className="hr" />
                </Typography>
            </Grid>
            <Course data = {this.state.allCourses}/>
        </div>
        );
    }
}
    export default CourseList

