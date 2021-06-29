import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../components/video';
import vid from '../images/vid.mp4'
import Tab from '../components/tab'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Plus from '@material-ui/icons/Add';

const VIDEO = {
    src:vid,
    type:'video/mp4'
   };
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

  const addTxt=()=>{
    return  "";
  }

  export default function MainCourse() {

    const classes = useStyles();
  
    return (
        
      <div >
        <Typography variant="h6" style={{marginLeft:"10px", position:"fixed", top:"9vh"}}>TUTORIAL PLAYLIST</Typography >
      <span id="leftCol" >
         <div id="videoTutorialPlaylist">
             <div class="video-home-menu">
                 <a class="content" href="#">
                     <Typography variant="body1" className="subhead" >Git Tutorial</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Overview</Typography></span>
                     </a>
                     <hr />
                     <div class="content-scrollable">
                         <a class="content active video-active" href="#">
                   <p class="play"></p>

                   <Typography variant="body1" className="subhead" >What is Git: Features, Command and Workflow in Git</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 1</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
               <Typography variant="body1" className="subhead" >GIT Tutorial For Beginner</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 2</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >Git Installation on Windows: A (Step-by-Step) Guide</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 3</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >GIT Tutorial For Beginner</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 4</Typography></span>
                   


               </a>
               <hr />
               <a class="content" href="#">

               <Typography variant="body1" className="subhead" >GIT Tutorial For Beginner</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 5</Typography></span>


                   <p class="play"></p>

                   <Typography variant="body1" className="subhead" >GIT Tutorial For Beginner</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 6</Typography></span>
                   
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >How to Resolve Merge Conflicts in Git?</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 7</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >What is GitHub And How To Use It?</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 8</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >Git vs GitHub: What are the Major Differences?</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 9</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                   <p class="play"></p>
                   <Typography variant="body1" className="subhead" >What is GitLab and How To use It?</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 10</Typography></span>
               </a>
               <hr />
               <a class="content" href="#">
                    <Typography variant="body1" className="subhead" >Top 30 Git Interview Questions and Answers [Updated 2020]</Typography>
                     <span><Typography variant="body2" color="textSecondary" >Lesson - 11</Typography></span>
                   <p class="play"></p>

               </a>
               </div>
            </div>
            
        </div>
        
    </span>
    <span>
    
        <span className="vid" >
         <Video src={vid}/>  
        </span>
        <span className="vid" id="txtBox">
        <Typography variant="h6" className="subhead" style={{margin:"0.2rem"}}>GIT Tutorial</Typography>
        <Typography variant="body2" color="inherit" style={{margin:"0.5rem"}}>By Bootcamp</Typography>
        <Typography variant="body2" color="textSecondary" style={{margin:"0.5rem"}} >Last updated at : 2020</Typography>
        </span>
        <span className="vid" id="txtBox" style={{position:"relative", top:"52vh", left:"33vw"}}>
        <Tab style={{overflow: "hidden"}} />
        </span>
        </span>
        <span className="vid" id="txtarea">
        <TextareaAutosize  aria-label="Note Book" rowsMin={5} placeholder="Note Book" className="note" />
        <Button onClick={addTxt} style={{border:"2px solid  #ffd2d9", padding:"5px", width:"286px"}}>
        <IconButton color="inherit">
            <Plus />
          </IconButton>
          Add to Notes
        </Button>
        
        </span>
      </div>
      
    );
  
}