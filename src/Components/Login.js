import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Auth from '../auth.js';
class Login extends Component{

    state = {
        email:"",
        password:""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Auth.login(this.props.handleLogin);
    }

    render(){
        return(
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter email address" name="email" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20" onClick={this.handleButton}> Sign In</button>
                        <Link to="/SignUp" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;