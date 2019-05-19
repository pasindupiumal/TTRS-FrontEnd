import React, {Component} from 'react';
import NavBar from './Nav.js';
import ProtectedRoute from '../protected_route';
import {BrowserRouter} from 'react-router-dom';
import TrainSelection from './TrainSelection.js';
import AboutUs from './AboutUs';

class HomeRoot extends Component{
 
  handleLogout = () => {
    this.context.history.push('/');
  }
  render(){
    return (
      <BrowserRouter>

        <div className="HomeRoot">
          <NavBar handleLogout={this.handleLogout}/>
          <ProtectedRoute  exact path="/TrainSelection" component={TrainSelection}/>
          <ProtectedRoute  exact path="/AboutUs" component={AboutUs}/>


        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default HomeRoot;
