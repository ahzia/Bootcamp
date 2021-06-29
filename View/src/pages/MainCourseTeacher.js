import React from 'react';
import Button from "@material-ui/core/Button";
import MainCourse from './MainCourse';
import { Link } from 'react-router-dom';



  export default function MainCourseTeacher() {

  
    return (
        
      <div >
        <MainCourse />
        <span className="topic" style={{position:"relative", top:"50vh", left:"77vw", width:"286px",padding: "20px", backgroundcolor: "#ffd2d9"}}>
        <Button>
          Add Topic to your Course
        </Button>
        </span>
      </div>
      
    );
  
}