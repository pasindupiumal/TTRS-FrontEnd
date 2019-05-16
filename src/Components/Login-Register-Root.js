import React from 'react';
import Login from './Login';
import '../App.css';

function LoginRegisterRoot(){

    return(
        <div className="LoginRegisterRoot">

            <div className="App__Aside"></div>

            <div className="App__Form">

                <div className="PageSwitcher">

                    <a href="#" className="PageSwitcher__Item">Sign In</a>

                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                </div>

                <div className="FormTitle">
                    <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign In</a> or <a href="#" className="FormTitle__Link">Sign Up</a>
                </div>

                <Login/>


            </div>
        </div>
    );
}

export default LoginRegisterRoot;