import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../images/white_Main.png'
import Profile from '../images/profile.png';
import { Link } from '@material-ui/core';
export class Navbar extends Component {
    render() {
        const authInstance=window.gapi.auth2.getAuthInstance();
        const user =authInstance.currentUser.get()
        const profile= user.getBasicProfile()
        const imageUrl =profile.getImageUrl()
        const userName=profile.getName()
        if(imageUrl===null){
            imageUrl=Profile
        }
        return (
            <div style={{marginBottom: "5rem"}}>
            <AppBar style={{background: "#fff"}}>
                <Toolbar >
                    <img src={logo} alt="" style={{width:"10vw"}} />
                    <Button className="NavItem">Dashboard</Button>
                    <Link href="login" >
                    <Button className="NavItem" onClick={authInstance.signOut}>Logout</Button>
                    </Link>
                    <img src={imageUrl} style={{width:"1.6rem", borderRadius: "50%"}} className="NavItem" id="profile" />
                    <Button className="NavItem" id="profile">{userName}</Button>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}
export default Navbar
