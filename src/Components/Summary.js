import React, {Component} from 'react';
import '../App.css'
import {withAlert} from 'react-alert';

class Summary extends Component{

    handleSubmit = () => {
        this.props.alert.success('Payment Successful');
        this.props.alert.success('Email Sent With Receipt');

        this.props.sendEmail();
        this.props.history.push('/Home/');
    }


    render(){
        
        return(
            <div className="Summary">
                 
                <h4 className="title center">Purchase Summary</h4>

                <div id="homepageSummary">

                    <div className="collection center">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Train Name</th>
                                    <th>{this.props.details.selectedTrain.trainName}</th>
                                </tr>

                                <tr>
                                    <th>Number of Tickets</th>
                                    <th>{this.props.details.payment.not}</th>
                                </tr>

                                <tr>
                                    <th>Platform</th>
                                    <th>{this.props.details.selectedTrain.origin}</th>
                                </tr>

                                <tr>
                                    <th>Date</th>
                                    <th>{this.props.details.payment.dot}</th>
                                </tr>
                
                                <tr>
                                    <th>Total</th>
                                    <th>{parseInt(this.props.details.payment.not, 10) * parseFloat(this.props.details.selectedTrain.price)}</th>
                                </tr>

                                <tr>
                                    <th>Discount</th>
                                    <th>0</th>
                                </tr>

                                <tr>
                                    <th>Sub Total</th>
                                    <th>{parseInt(this.props.details.payment.not, 10) * parseFloat(this.props.details.selectedTrain.price)}</th>
                                </tr>
                            </tbody>
                        </table>

                        
                    </div>

                    <div className="container center" id="paymentButtonCt">
                            <button id="confirmPayment" onClick={this.handleSubmit}> Confirm Payment</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withAlert()(Summary);