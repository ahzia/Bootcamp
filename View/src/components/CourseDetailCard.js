import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '../components/Rating';
import Button from '@material-ui/core/Button'
import img from '../images/business.png'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  
  image: {
    width: "100vw",
    height: '40vh',
  },
   
  img: {
    maxWidth: '100vw',
    maxHeight: '50vh',
  },
  }));
export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div >
       <Paper style={{width:"90vw", height:"80vh", overflow:"hidden", margin:"auto"}}>
      
     <div>
      <span id="first">
     
        <Grid  container style={{margin:"2rem"}} >
          <Grid  >
          <br />
          <Typography gutterBottom variant="h6">
                Business Ethics: Exploring Big Data and Tax Avoidance
          </Typography>
          <be />
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </div>
            <div style={{ width:"70vw", overflow: "hidden", position: "relative", top:"10vh"}}>
            <br />
                <Typography gutterBottom variant="body1" >
                Learn why big data and tax avoidance are some of the biggest ethical issues<br /> 
                significant benefits to businesses such as attracting employees, customers.
                </Typography>
                </div>
          </Grid>
        </Grid>
     
      </span>
      <span id="second">
     
      <span>
            
            <Link href="tab" >
                <Button size="big" variant="contained" color="primary" style={{marginBottom:"2vh"}}>
                    Join now
                </Button>
                </Link>
                <br />
                <Typography variant="body1" color="textSecondary" style={{margin:"0.2rem"}}>
                3,642 enrolled on this course
                </Typography>
                <br />
                <Rating size="large" />
                <Typography variant="body1" style={{margin:"0.5rem"}}>
                Total Course Duration:
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{margin:"0.5rem"}}>
                40 hours
                </Typography>

                <Typography variant="body1" style={{margin:"0.2rem"}}>
                Modules:
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{margin:"0.2rem"}}>
                8
                </Typography>
            </span>
      
      </span>
      </div>
      </Paper>
    </div>

  );
}