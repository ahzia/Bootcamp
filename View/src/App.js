
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//componenets
import Navbar from "./components/Navbar";

//pages
import login from './pages/login';
import Dashboard from './pages/Dashboard';
import createCourse from './pages/createCourse';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import tab from './components/tab';
import MainCourse from './pages/MainCourse';
import MainCourseTeacher from './pages/MainCourseTeacher';





class App extends Component {
    render() {
    return (
        <div className = "App" >
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/login" component={login}/>
                    <Route exact path="/createCourse" component={createCourse}/>
                    <Route exact path="/CourseList" component={CourseList}/>
                    <Route exact path="/CourseDetail" component={CourseDetail}/>
                    <Route exact path="/tab" component={tab}/>
                    <Route exact path="/MainCourse" component={MainCourse}/>
                    <Route exact path="/MainCourseTeacher" component={MainCourseTeacher}/>
                </Switch>
            </Router>
        
        </div>
    );
    
}

}
export default App;


