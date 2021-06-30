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
import Loading from '../components/loading';
import { Link } from '@material-ui/core';

export class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // handleReadMore(data) {
  //   this.props.history.push("/about");
  //   joinCourse(data.course.id, data.course.enrollmentCode).then((res) => {
  //     this.setState({
  //       success: true
  //     })
  //   });
  // }
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
    return (
      <React.Fragment>
        <main>
          <Container className="cardGrid" maxWidth="md">
            <Grid container spacing={4}>
              {/* {data.content.body.map(block => block.component)} */}
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
                      <Link to={
                        {
                          pathname: '/MainCourse',
                          data: {course}
                        }
                      }>
                        {/* onClick={() => this.handleReadMore({ course })} */}
                        <Button size="small" className="cardButton">
                          Read more...
                        </Button>
                      </Link>

                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment >
    );
  }
}
export default Course