import React, { Component} from 'react'
import { Grid, Typography } from '@material-ui/core';
import Course from '../components/userCourse';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import Nav from '../components/Navbar';
import Loading from '../components/loading'
import {getUserEnrolledCourses} from '../api/gapi/classroom'
import {getUserCourses} from '../api/gapi/classroom'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enrolledCourses: null,
            myCourses: null
        }
    }
    componentDidMount() {
        if(this.props.isSignedIn === null){
            return <Loading uiLoading="true" />
        }
        getUserEnrolledCourses().then((response) => {
            this.setState({
                enrolledCourses: response
            });
        });
        getUserCourses().then((response) => {
            this.setState({
                myCourses: response
            });
            console.log(response);
        });
    }
    render() {
        return (
            <div>
                <Nav />
                <Grid className="topContainer" >
                    <Typography gutterBottom>
                        Enrolled Courses
                        <hr className="hr" />
                    </Typography>
                    <Link href="CourseList" >
                        <Button variant="outlined" size="small">
                            Join new Course
                        </Button>
                    </Link>
                </Grid>
                <Course data = {this.state.enrolledCourses}/>
                <Grid className="topContainer" >
                    <Typography gutterBottom>
                        Created Courses
                        <hr className="hr" />
                    </Typography>
                    <Link href="createCourse" >
                        <Button variant="outlined" size="small">
                            Create new Course
                        </Button>
                    </Link>
                </Grid>
                <Course data = {this.state.myCourses}/>
                <Grid className="topContainer" >
                </Grid>
            </div>
        );
    }
}

export default Dashboard
