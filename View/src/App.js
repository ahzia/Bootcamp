import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from "firebase";
//CSS
import './App.css';
//componenets
import Navbar from "./components/Navbar";
import Loading from './components/loading'
import { Grid} from '@material-ui/core';
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
    insertGapiScript() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/api.js'
        script.onload = () => { this.initializeGoogleAndFirebaseSignIn() }
        document.body.appendChild(script)
    }
    initializeGoogleAndFirebaseSignIn() {
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

        const firebaseConfig = {
            apiKey: "AIzaSyA5UjwHsY0_eaq6NHFrGURV0WE4e_KVvRQ",
            authDomain: "bootcampaf-1616570042819.firebaseapp.com",
            projectId: "bootcampaf-1616570042819",
            storageBucket: "bootcampaf-1616570042819.appspot.com",
            messagingSenderId: "468491144903",
            appId: "1:468491144903:web:0a3715f22ddbc5cbff38e2",
            measurementId: "G-HKKQ27JHDJ"
        };
        window.gapi.load('client', () => {
            window.gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
              })
            .then(() => {
                const authInstance = window.gapi.auth2.getAuthInstance();
                const isSignedIn = authInstance.isSignedIn.get();
                this.setState({ isSignedIn });
                authInstance.isSignedIn.listen(isSignedIn => {
                    //listen for Signin/Signout
                    if (isSignedIn) {
                        //User logedin/Signedup to GAPI
                        //Firebase Signin/Signup:
                        var googleUser = authInstance.currentUser.get();
                        var idToken = googleUser.getAuthResponse().id_token;
                        firebase.initializeApp(firebaseConfig);
                        var creds = firebase.auth.GoogleAuthProvider.credential(idToken);
                        firebase.auth().signInWithCredential(creds).then((user) => {
                            //User has an item is new(If user was new send to backend)
                            //Send Token to Backend
                            localStorage.setItem('AuthToken', `${idToken}`);
                        });

                    }
                    else {
                        //User Signedout from GAPI
                        var user = firebase.auth().currentUser;
                        if (user) {
                            // User is signedin in firebase.
                            //sign out user from firebase
                            firebase.auth().signOut();
                            console.log("Signedout");
                        }
                    }
                });
            })
        })
    }
    componentDidMount() {
        this.insertGapiScript();
    }
    isUserSignedIn(Page) {
        if(this.state.isSignedIn === null){
            return (
           <Grid container xs justify="center" direction="column" alignItems="center" className="loginCtr">
           <Loading uiLoading="true" />
            </Grid>)
        }
        return this.state.isSignedIn ?
            <Page isSignedIn={this.state.isSignedIn} /> :
            <Login isSignedIn={this.state.isSignedIn} />
    }
    render() {
        return (
            <div className="App" >
                <Router>
                    <Switch>

                        <Route exact path="/" component={() => this.isUserSignedIn(Dashboard) } />
                        <Route exact path="/login" component={() => this.isUserSignedIn(Dashboard)} />
                        <Route exact path="/dashboard" component={() => this.isUserSignedIn(Dashboard)} />
                        <Route exact path="/createCourse" component={createCourse } />
                        <Route exact path="/CourseList" component={() => this.isUserSignedIn(CourseList)}/>
                    </Switch>
                </Router>

            </div>
        );

    }

}
export default App;


