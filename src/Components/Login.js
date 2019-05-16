import React, {Component} from 'react';
import '../App.css';

class Login extends Component{

    render(){
        return(
            <div className="FormCenter">
                <form className="FormFields" onSubmit="{this.handleSubmit}">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="FormField__Input" placeholder="Enter first name" name="firstName"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="FormField__Input" placeholder="Enter last name" name="lastName"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter email address" name="email"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="nic">NIC</label>
                        <input type="text" id="nic" className="FormField__Input" placeholder="Enter NIC" name="nic"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" id="mobileNumber" className="FormField__Input" placeholder="Enter mobile number" name="mobileNumber"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password1">Password</label>
                        <input type="password" id="password1" className="FormField__Input" placeholder="Enter password" name="password1"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password2">Re-Enter Password</label>
                        <input type="password" id="password2" className="FormField__Input" placeholder="Re-enter password" name="password2"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;