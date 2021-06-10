import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../images/white_Main.png'
import Profile from '../images/profile.png';
import { Link } from '@material-ui/core';

export class Navbar extends Component {
    render() {
        return (
            <div style={{marginBottom: "5rem"}}>
            <AppBar style={{background: "#fff"}}>
                <Toolbar >
                    <img src={logo} alt="" style={{width:"10vw"}} />

                    <Button className="NavItem">Dashboard</Button>
                    <Link href="login" >
                    <Button className="NavItem">Logout</Button>
                    </Link>
                    <img src={Profile} style={{width:"1.6rem", borderRadius: "50%"}} className="NavItem" id="profile" />
                    <Button className="NavItem" id="profile">User Proflie</Button>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}

export default Navbar