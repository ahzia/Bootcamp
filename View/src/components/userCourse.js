import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import defaultImage from '../images/course1.png';

export default function Course(props) {
  if(props.data===null){
   return <h1>Loadings</h1>
  }
  return (
    <React.Fragment>
    <main>      
        <Container className="cardGrid" maxWidth="md">
          <Grid container spacing={4}>
          {/* {data.content.body.map(block => block.component)} */}
            {props.data.map((course) => (
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
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}