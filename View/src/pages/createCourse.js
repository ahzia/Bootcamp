import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ImageUploader from 'react-images-upload';
import Course from '../components/course'


import { Link } from '@material-ui/core';

export class createCourse extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
          return ( 

<Grid container xs justify = "center" direction = "column" alignItems = "center" className="loginCtr">
            <Grid container justify = "center" xs={12} sm={9} md={6} lg={6} >
                <Paper item className="paperBox" style={{borderRadius:"20px"}} > 
                <Grid container justify = "center" style={{paddingTop:"4vh"}} >
      <Typography variant="h6" gutterBottom>
        Create New Course
      </Typography>
      <Grid container spacing={3} style={{margin:"50px"}}>
    
        <Grid item xs={12}>
          <TextField
            id="coursename"
            name="coursename"
            label="Course Name"
            fullWidth
            autoComplete="Course Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="courseheading"
            name="courseheading"
            label="Course Heading"
            fullWidth
            autoComplete="Course Heading"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="coursedescription"
            name="coursedescription"
            label="Course Description"
            fullWidth
            autoComplete="Course Description"
          />
        </Grid>
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </Grid>
        </Grid>

        
        <Button  variant="outlined" className="btn-course" id="create">
            Create Course
        </Button> 
     
        <Link href="/" >
        <Button  variant="outlined" className="btn-course" id="cancel">
            Cancel
        </Button> 
        </Link>
        </Paper> 

    </Grid>

</Grid>
   
  );
}
}

export default createCourse