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

class HomeRoot extends Component{
 
  state = {
    selectedTrain: null,
    loggedUser: null

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


  render(){
    return (
      <BrowserRouter>

        <div className="HomeRoot">
          <NavBar handleLogout={this.handleLogout}/>
          

          <ProtectedRoute  exact path="/Home/" component={TrainSelection} getSelectedTrain={this.getSelectedTrain}/>
          <ProtectedRoute  exact path="/Home/AboutUs" component={AboutUs}/>
          <ProtectedRoute  exact path="/Home/Payment" component={Payment} selectedTrain={this.state.selectedTrain} loggedUser={this.state.loggedUser}/>

          
        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default withAlert()(HomeRoot);
