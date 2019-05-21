import React, {Component} from 'react';
import '../App.css'
class Payment extends Component{

    render(){
        
        return(
            <div className="Payment">
                 
                <h4 className="title center">Payment</h4>

                <div id="homepage">

                    <form onSubmit={this.handleSubmit}>

                        <ul id="horizontal-list-p">
                            
                            <li> 
                                <label>First Name</label>
                                <input type="text" value={this.props.loggedUser.firstName} readOnly/>

                            </li>

                            <li>
                                <label>Last Name</label>
                                <input type="text" value={this.props.loggedUser.lastName} readOnly/>

                            </li>

                            <li>
                                <label>Email Address</label>
                                <input type="text" value={this.props.loggedUser.email} readOnly/>

                            </li>

                            <li>
                                <label>NIC</label>
                                <input type="text" value={this.props.loggedUser.nic} readOnly/>

                            </li>

                            <li>
                                <label>Mobile Number</label>
                                <input type="text" value={this.props.loggedUser.mobileNumber} readOnly/>

                            </li>

                            <li>

                                
                                <label htmlFor="checkcheck">
                                    
                                    <input type="checkbox" id="checkcheck" readOnly/> 
                                    <span>Government Employee Discount</span>
                                    
                                </label>
                            </li>

                            
                        </ul>

                    </form>
                    
                </div>

                <div id="homepage" className="trainBox">
                    
                    <form onSubmit={this.handleSubmit}>

                        <ul id="horizontal-list-pp">
                            
                            <li> 
                                <label>Train Name</label>
                                <input type="text" value={this.props.selectedTrain.trainName} readOnly/>

                            </li>

                            <li>
                                <label>Origin</label>
                                <input type="text" value={this.props.selectedTrain.origin} readOnly/>

                            </li>

                            <li>
                                <label>Destination</label>
                                <input type="text" value={this.props.selectedTrain.destination} readOnly/>

                            </li>

                            <li>
                                <label>Price</label>
                                <input type="text" value={this.props.selectedTrain.price} readOnly/>

                            </li>

                            <li>
                                <label>Number of Tickets</label>
                                <input type="text" id="noOfTickets"/>

                            </li>

                            <li>

                                <label>Date of Travel</label>
                                <input type="date" id="dot"/>
                            </li>

                            
                        </ul>

                    </form>
                </div>

            </div>
        )
    }
}

export default Payment;