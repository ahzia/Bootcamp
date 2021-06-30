import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../components/video';
import vid from '../images/vid.mp4'
import Tab from '../components/tab'
import Navbar1 from '../components/Navbar';
import Note from '../components/note'
import Loading from '../components/loading'
export class MainCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlistId: null,
      courseId: null
    }
  }
  componentDidMount() {
    if (this.props.isSignedIn === null) {
      return <Loading uiLoading="true" />
    }
    if (this.props.data === null) {
      return <h1>loading</h1>
    }
    console.log(this.props.data);
    const useStyles = makeStyles({
      root: {
        width: '100%',
      },
    });

    const addTxt = () => {
      return "";
    }
  }
  render() {
    return (
      <div >
        <Navbar1 />
        <Typography variant="h6" style={{ marginLeft: "10px", position: "fixed", top: "21vh" }}>TUTORIAL PLAYLIST</Typography >
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
            <Video src={vid} />
          </span>
          <span className="vid" id="txtBox">
            <Typography variant="h6" className="subhead" style={{ margin: "0.2rem" }}>GIT Tutorial</Typography>
            <Typography variant="body2" color="inherit" style={{ margin: "0.5rem" }}>By Bootcamp</Typography>
            <Typography variant="body2" color="textSecondary" style={{ margin: "0.5rem" }} >Last updated at : 2020</Typography>
          </span>
          <span className="vid" id="txtBox" style={{ position: "relative", top: "52vh", left: "33vw" }}>
            <Tab style={{ overflow: "hidden" }} />
          </span>
        </span>
        <span className="vid" id="txtarea">
          <Note />
        </span>
      </div>
    );
  }
}
export default MainCourse