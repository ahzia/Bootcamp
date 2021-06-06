import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import course from '../images/course1.png';

const cards = [1, 2, 3];

export default function Course() {

  return (
    <React.Fragment>
    <main>      
        <Container className="cardGrid" maxWidth="md">
         
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className="cardCourse">
                  <CardMedia
                    className="cardMedia"
                    image={course}
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="h2">
                      Course Title
                    </Typography>
                    <Typography variant="body2"> 
                    This is a course description. You can use this section to describe content of course.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" className="cardButton">
                    Enroll
                    </Button>
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