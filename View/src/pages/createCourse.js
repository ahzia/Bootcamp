import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ImageUploader from 'react-images-upload';
import { Link } from '@material-ui/core';
import { createCoursePlaylist } from '../api/gapi/youtube'
import { createCourseInClassroom } from '../api/gapi/classroom'
import { createCourseInDb } from '../api/server'
import Loading from '../components/loading'
import SnackbarAlert from '../components/Snackbar'

export class createCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      name: "",
      descriptionHeading: "",
      description: "",
      uiLoading: true,
      success: false
    };
    this.onDrop = this.onDrop.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  componentWillMount = () => {
    this.setState({

      uiLoading: false
    });
  }

  render() {
    const handleSubmit = (event) => {
      this.setState({
        uiLoading: true
      });
      event.preventDefault();
      const userData = {
        name: this.state.name,
        descriptionHeading: this.state.descriptionHeading,
        description: this.state.description
      };
      console.log(userData);
      //Create youtube playlist for course and retrive ID
      createCoursePlaylist(userData).then((PlaylistId) => {
        console.log("Playlist Created");
        //create course in Google Classroom:
        createCourseInClassroom(userData.name,
          userData.description,
          userData.descriptionHeading,
          PlaylistId).then((course) => {
            console.log("classroom created");
            createCourseInDb(course).then((response) => {
              console.log("class created");
              console.log(response);
              this.setState({
                uiLoading: false,
                pictures: [],
                name: "",
                descriptionHeading: "",
                description: "",
                success: true,
              });

            });
          });

      });

    }
    return (
      <Grid container xs justify="center" direction="column" alignItems="center" className="loginCtr">
        <Grid container justify="center" xs={12} sm={9} md={6} lg={6} >
          <Paper item className="paperBox" style={{ borderRadius: "20px" }} >
            <Grid container justify="center" style={{ paddingTop: "4vh" }} >
              <Typography variant="h6" gutterBottom>
                Create New Course
              </Typography>
              <Grid container spacing={3} style={{ margin: "50px" }}>

                <Grid item xs={12}>
                  <TextField
                    id="coursename"
                    name="name"
                    label="Course Name"
                    fullWidth
                    autoComplete="Course Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="courseheading"
                    name="descriptionHeading"
                    label="Course Heading"
                    fullWidth
                    autoComplete="Course Heading"
                    onChange={this.handleChange}
                    value={this.state.descriptionHeading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="coursedescription"
                    name="description"
                    label="Course Description"
                    fullWidth
                    autoComplete="Course Description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </Grid>
                <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.png']}
                  maxFileSize={5242880}
                />
              </Grid>
            </Grid>


            <Button variant="outlined" onClick={handleSubmit} className="btn-course" id="create">
              Create Course
            </Button>
            <Link href="/" >
              <Button variant="outlined" className="btn-course" id="cancel">
                Cancel
              </Button>
            </Link>
            <Loading uiLoading={this.state.uiLoading} />
            <SnackbarAlert successOpen={this.state.success} message="Course Created" onClose={() => {
              this.setState({
                success: false
              });
            }} />
          </Paper>

        </Grid>

      </Grid>

    );
  }
}

export default createCourse