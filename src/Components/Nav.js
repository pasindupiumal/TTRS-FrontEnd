import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../auth.js';
class NavBar extends Component{

    handleLogout = (e) => {
        Auth.logout(() => {
            this.porps.handleLogout();
        })
    }

    render(){
        return(
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <NavLink exact to="/TrainSelection" className="brand-logo">TTRS</NavLink>
                    <ul className="right">
                        <li> <NavLink exact to='/AboutUs'>About Us</NavLink></li>
                        <li> <NavLink exact to='/MyAccount'>My Account</NavLink></li>
                        <li> <NavLink exact to='/' onClick={this.handleLogout} >Logout</NavLink></li>
                    
                        
                    </ul>
                </div>
            </nav>
        )
    }


   
}

export default NavBar;