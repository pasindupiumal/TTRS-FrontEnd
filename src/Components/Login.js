import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Login extends Component{

    render(){
        return(
            <div className="FormCenter">
                <form className="FormFields" onSubmit="{this.handleSubmit}">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="FormField__Input" placeholder="Enter email address" name="email"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter password" name="password"/>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20"> Sign In</button>
                        <Link to="/SignUp" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;