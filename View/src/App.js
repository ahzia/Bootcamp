
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';



//componenets
import Navbar from "./components/Navbar";

//pages
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import createCourse from './pages/createCourse';
import CourseList from './pages/CourseList';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: null
        }
    }

    initializeGoogleSignIn() {
        var CLIENT_ID =
            "468491144903-2c68uj6cbo2uh96d2i7ld08gfp2k0t36.apps.googleusercontent.com";
        var API_KEY = "AIzaSyA5UjwHsY0_eaq6NHFrGURV0WE4e_KVvRQ";

        // Array of API discovery doc URLs for APIs used by our App
        var DISCOVERY_DOCS = [
            "https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest",
            "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
            "https://www.googleapis.com/discovery/v1/apis/people/v1/rest"
        ];

        // Authorization scopes required by the API;
        var SCOPES =
            "https://www.googleapis.com/auth/classroom.profile.emails https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl";

        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            }).then(() => {
                const authInstance=window.gapi.auth2.getAuthInstance();
                const isSignedIn=authInstance.isSignedIn.get();
                this.setState({isSignedIn});
                authInstance.isSignedIn.listen(isSignedIn =>{
                    this.setState({isSignedIn});
                })
            })
        })
    }
    componentDidMount() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () => this.initializeGoogleSignIn()
        document.body.appendChild(script)
    }
    isUserSignedIn(Page){
        return this.state.isSignedIn ?
        <Page/> :
        <Login isSignedIn={this.state.isSignedIn}/>
    }
    render() {
        return (
            <div className="App" >
                <Router>
                    <Switch>

                        <Route exact path="/" component={() => this.isUserSignedIn(Dashboard)} />
                        <Route exact path="/login" component={() => this.isUserSignedIn(Dashboard)} />
                        <Route exact path="/dashboard" component={() => this.isUserSignedIn(Dashboard)} />
                        <Route exact path="/createCourse" component={createCourse} />
                        <Route exact path="/CourseList" component={CourseList} />
                    </Switch>
                </Router>

            </div>
        );

    }

}
export default App;


