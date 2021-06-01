import React, { Component, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import logo from '../logo.png';
import meet from '../images/google-meet.png';
import calender from '../images/Google_Calendar.png';
import classroom from '../images/google-classroom.png';
import youtube from '../images/youtube.png';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


export class login extends Component {
    render() {
    const responseGoogle= response =>{
        console.log(response);
}

          return ( 
          <Grid container xs justify = "center" direction = "column" alignItems = "center" className="loginCtr">
            <Grid container justify = "center" xs={12} sm={9} md={6} lg={6} >
                <Paper item className="paperBox" style={{borderRadius:"20px"}} > 
                <Grid container justify = "center" style={{paddingTop:"4vh"}} >
                    <img src={logo} alt="" className="logo" style={{width:"10rem"}} />
                </Grid>
                <Grid container justify = "center" style={{paddingTop:"2vh"}}>
                <Typography variant="body2" variant="h6">Welcome back!</Typography>
                </Grid>
                <Grid container justify = "center" style={{paddingTop:"6vh"}}>

                <Button onClick={login} ><GoogleLogin className="btnLog"
                    clientId="718601654275-5s6stqchthn9hof5v47n0a3jqdi3jvml.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                /></Button>

                </Grid>
                <Grid container justify = "center" style={{paddingTop:"8vh", paddingRight:"4rem", paddingLeft:"4rem"}}>
                <Typography variant="h6" >
                Bootcamp is a YouTube-based education platform; 
                we have combined the features of Google Classroom
                 with YouTube videos. Using our Platform, Teachers
                  can search for the best contents in YouTube, and
                   then include it in their Courses.
                </Typography>
                </Grid>
                <Grid container justify = "center" className="imgCtr" >
                <img src={classroom} alt="" className="imgLog" />
                <img src={youtube} alt="" className="imgLog"  />
                <img src={meet} alt="" className="imgLog" style={{width:"40px", height:"40px", marginTop:"1vh"}} />
                <img src={calender} alt="" className="imgLog"/>
                </Grid>
                </Paper> 
            </Grid> 
        </Grid>
           
       
        );
    }
}

    export default login
