import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import '../App.css';

function LoginRegisterRoot(){

    return(
        <BrowserRouter>
            <div className="LoginRegisterRoot">

                <div className="App__Aside"></div>

                <div className="App__Form">

                    <div className="PageSwitcher">
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink to="/SignUp" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                        <NavLink to="/SignUp" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    <Route exact path="/" component={Login}/>
                    <Route path="/SignUp" component={SignUp}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default LoginRegisterRoot;