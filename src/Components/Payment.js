import React, {Component} from 'react';
import '../App.css'
import {withAlert} from 'react-alert';

class Payment extends Component{

    state = {
        noOfTickets: null,
        dot: null,
        cardNumber: null,
        expireDate: null,
        csv: null,
        mobileNumber: null,
        pin: null,


    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let payment = {};
        
        if(document.getElementById('creditCard').checked){
            payment = {
                not: this.state.noOfTickets,
                dot: this.state.dot,
                pm: 'Credit Card',
                cardNumber: this.state.cardNumber,
                expireDate: this.state.expireDate,
                csv: this.state.csv

            }
        }
        else if(document.getElementById('mobilePayment').checked){
            
            if(this.state.mobileNumber === null){
                payment = {
                    not: this.state.noOfTickets,
                    dot: this.state.dot,
                    pm: 'Mobile Payment',
                    mobileNumber: this.props.loggedUser.mobileNumber,
                    pin: this.state.pin
                }
            }
            else{
                payment = {
                    not: this.state.noOfTickets,
                    dot: this.state.dot,
                    pm: 'Mobile Payment',
                    mobileNumber: this.state.mobileNumber,
                    pin: this.state.pin
                }
            }

            
        }

        this.props.alert.show('Validating Payment Details');

        setTimeout(()=> {this.props.alert.success('Validation Successful');
        this.props.getPaymentDetails(payment);
        this.props.history.push('/Home/Summary');
    }, 1500);

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
                                <input type="text" id="noOfTickets" onChange={this.handleChange}/>

                            </li>

                            <li>

                                <label>Date of Travel</label>
                                <input type="date" id="dot" onChange={this.handleChange}/>
                            </li>

                            
                        </ul>

                    </form>
                </div>



                <div id="homepage" className="paymentBox">
                    
                    <form onSubmit={this.handleSubmit}>

                        <ul id="horizontal-list-ppp">
                            
                            <li> 
                                <label htmlFor="creditCard">
                                    
                                    <input type="radio" id="creditCard" name="payment" value="creditcard" checked="checked" onChange={this.handleChange}/> 
                                    <span>Credit Card Payment</span>
                                    
                                </label>
                                
                            </li>

                            <li>
                                <label>Card Number</label>
                                <input type="text" id="cardNumber" onChange={this.handleChange}/>

                            </li>

                            <li>
                                <label>Expire Date</label>
                                <input type="text" placeholder="yy/mm" id="expireDate" onChange={this.handleChange}/>

                            </li>

                            <li>
                                <label>CSV</label>
                                <input type="text" id="csv" onChange={this.handleChange}/>

                            </li>

                        </ul>


                        <ul id="horizontal-list-ppp">
                            
                            <li> 
                                <label htmlFor="mobilePayment">
                                    
                                    <input type="radio" name="payment" value="mobile" id="mobilePayment" onChange={this.handleChange}/> 
                                    <span>Mobile Payment</span>
                                    
                                </label>
                                
                            </li>

                            <li>
                                <label>Mobile Number</label>
                                <input type="text" id="mobileNumber" onChange={this.handleChange} value={this.props.loggedUser.mobileNumber}/>

                            </li>

                            <li>
                                <label>PIN</label>
                                <input type="password" id="pin" onChange={this.handleChange}/>

                            </li>
                            
                        </ul>

                        <br/>

                        <div className="container center" id="proceedContainer">
                             <button id="proceedButton" onClick={this.handleSubmit}>Proceed</button>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default withAlert()(Payment);