import React, {Component} from 'react';
import NavBar from './Nav.js';
import ProtectedRoute from '../protected_route';
import {BrowserRouter} from 'react-router-dom';
import TrainSelection from './TrainSelection.js';
import AboutUs from './AboutUs';
import Payment from './Payment';
import axios from 'axios';
import Auth from '../auth.js';
import {withAlert} from 'react-alert';
import nodemailer from 'nodemailer';
import Summary from './Summary';

class HomeRoot extends Component{
 
  state = {
    selectedTrain: null,
    loggedUser: null,
    payment: null

  }

  componentDidMount = () => {
    
    const user = Auth.getDecodedToken();

    axios.get('http://localhost:3000/api/users/' + user._id, {
      headers:{
        'x-auth-token': localStorage.getItem('token')
      }
    }).then((res) => {
      this.setState({
        loggedUser: res.data
      })
    }).catch((err) => {
      this.props.alert.error(err.response.data);
    })
  };

  handleLogout = () => {
    this.props.history.push('/');
  }

  getSelectedTrain = (train) => {
    this.setState({
      selectedTrain: train
    })
  }

  getPaymentDetails = (payments) => {
    this.setState({
      payment:payments
    })
  }

  sendEmail = async () => {
    var transporter = nodemailer.createTransport({host:'smtp.gmail.com',port:587,secure:true ,auth:{user:'chamikarox99@gmail.com'},pass:'chamikarox'})
    var mailOptions= {from:'chamikarox99@gmail.com', to : this.state.loggedUser.email,subject:'Train Ticket Reservation System', text:'Payment Successful'}

    let info = await transporter.sendMail(mailOptions)

  }


  render(){
    return (
      <BrowserRouter>

        <div className="HomeRoot">
          <NavBar handleLogout={this.handleLogout}/>
          

          <ProtectedRoute  exact path="/Home/" component={TrainSelection} getSelectedTrain={this.getSelectedTrain}/>
          <ProtectedRoute  exact path="/Home/AboutUs" component={AboutUs}/>
          <ProtectedRoute  exact path="/Home/Summary" component={Summary} details={this.state} sendEmail={this.sendEmail}/>
          <ProtectedRoute  exact path="/Home/Payment" component={Payment} getPaymentDetails={this.getPaymentDetails} selectedTrain={this.state.selectedTrain} loggedUser={this.state.loggedUser}/>

          
        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
