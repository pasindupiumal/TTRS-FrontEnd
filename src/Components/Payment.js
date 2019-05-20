import React, {Component} from 'react';
import '../App.css'
class Payment extends Component{

    state = {
        firstName: 'Pasindu',
        lastName: 'Piumal',
        email: 'pasindu0996@gmail.com',
        password: 'mamapasindu',
        nic: '961153301V',
        mobileNumber: '0766048022'
    }

    render(){
        
        return(
            <div className="Payment">
                 
                <h4 className="title center">Payment</h4>

                <div id="homepage">

                    <form onSubmit={this.handleSubmit}>

                        <ul id="horizontal-list-p">
                            
                            <li> 
                                <label>First Name</label>
                                <input type="text" value={this.state.firstName} readOnly/>

                            </li>

                            <li>
                                <label>Last Name</label>
                                <input type="text" value={this.state.lastName} readOnly/>

                            </li>

                            <li>
                                <label>Email Address</label>
                                <input type="text" value={this.state.email} readOnly/>

                            </li>

                            <li>
                                <label>NIC</label>
                                <input type="text" value={this.state.nic} readOnly/>

                            </li>

                            <li>
                                <label>Mobile Number</label>
                                <input type="text" value={this.state.mobileNumber} readOnly/>

                            </li>

                            <li>

                                
                                <label for="checkcheck">
                                    
                                    <input type="checkbox" id="checkcheck" readonly/> 
                                    <span>Government Employee Discount</span>
                                    
                                </label>
                            </li>

                            
                        </ul>

                    </form>
                    
                </div>

            </div>
        )
    }
}

export default Payment;