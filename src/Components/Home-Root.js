import React, {Component} from 'react';
import NavBar from './Nav.js';
import ProtectedRoute from '../protected_route';
import {BrowserRouter} from 'react-router-dom';
import TrainSelection from './TrainSelection.js';
import AboutUs from './AboutUs';
import Payment from './Payment';

class HomeRoot extends Component{
 
  handleLogout = () => {
    this.props.history.push('/');
  }

  loadTheOtherPage = () => {
    console.log('hello, world');
  }

  render(){
    return (
      <BrowserRouter>

        <div className="HomeRoot">
          <NavBar handleLogout={this.handleLogout}/>
          

          <ProtectedRoute  exact path="/Home/" component={TrainSelection} loadTheOtherPage={this.loadTheOtherPage}/>
          <ProtectedRoute  exact path="/Home/AboutUs" component={AboutUs}/>
          <ProtectedRoute  exact path="/Home/Payment" component={Payment}/>

          
        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default HomeRoot;
