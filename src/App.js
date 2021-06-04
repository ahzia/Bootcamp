
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';



//componenets
import Navbar from "./components/Navbar";

//pages
import login from './pages/login';
import Dashboard from './pages/Dashboard';
import createCourse from './pages/createCourse';



class App extends Component {
    render() {
    return (
        <div className = "App" >
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/login" component={login}/>
                    <Route exact path="/createCourse" component={createCourse}/>
                </Switch>
            </Router>
        
        </div>
    );
    
}

}
export default App;


