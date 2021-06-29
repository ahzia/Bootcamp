import React from 'react';
import Button from "@material-ui/core/Button";
import MainCourse from './MainCourse';




  export default function MainCourseTeacher() {

  
    return (
          <div>
             <MainCourse />
             <span style={{position:"relative", top:"-29vh", margin:"2px",padding:"10px"}}>
              <Button variant="outlined" color="secondary">
                Add New Topic
              </Button>
            </span>
          </div>
     
      
    );
  
}