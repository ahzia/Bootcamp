import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import defaultImage from '../images/course1.png';
import Loading from './loading'
import { joinCourse } from '../api/gapi/classroom';
import SnackbarAlert from './Snackbar'

export class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }
  handleJoin(data) {
    joinCourse(data.course.id, data.course.enrollmentCode).then((res)=>{
     this.setState({
       success:true
     })
    });
  }
  render() {
    if (this.props.data === null) {
      return (
        <React.Fragment>
          <main>
            <Container className="cardGrid" maxWidth="md">
              <Grid container spacing={4}>
                <Loading uiLoading="true" />
              </Grid>
            </Container>
          </main>
        </React.Fragment>);
    }
    console.log("data: " + this.props.data);
    return (
      <React.Fragment>
        <main>
          <Container className="cardGrid" maxWidth="md">
            <Grid container spacing={4}>
              {this.props.data.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
                  <Card className="cardCourse">
                    <CardMedia
                      className={"cardMedia"}
                      image={defaultImage}
                      title={course.name}
                    />
                    <CardContent className="cardContent">
                      <Typography gutterBottom variant="h5" component="h2">
                        {course.name}
                      </Typography>
                      <Typography variant="body2">
                        {course.descriptionHeading}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" className="cardButton">
                        Read more...
                      </Button>

                      <Button size="small" className="cardButton" onClick={() => this.handleJoin({ course })}>
                        Join Course
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <SnackbarAlert successOpen={this.state.success} message="Succefully Joined" onClose={() => {
              this.setState({
                success: false
              });
            }} />
      </React.Fragment>
    );
  }
}
export default Course