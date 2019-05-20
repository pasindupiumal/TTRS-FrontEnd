import React, {Component} from 'react';
import NavBar from './Nav.js';
import ProtectedRoute from '../protected_route';
import {BrowserRouter} from 'react-router-dom';
import TrainSelection from './TrainSelection.js';
import AboutUs from './AboutUs';
import Payment from './Payment';

class HomeRoot extends Component{
 
  state = {
    selectedTrain: null,
  }


  handleLogout = () => {
    this.props.history.push('/');
  }

  getSelectedTrain = (train) => {
    this.setState({
      selectedTrain: train
    }, ()=> console.log(this.state.selectedTrain))

  
  }


  render(){
    return (
      <BrowserRouter>

        <div className="HomeRoot">
          <NavBar handleLogout={this.handleLogout}/>
          

          <ProtectedRoute  exact path="/Home/" component={TrainSelection} getSelectedTrain={this.getSelectedTrain}/>
          <ProtectedRoute  exact path="/Home/AboutUs" component={AboutUs}/>
          <ProtectedRoute  exact path="/Home/Payment" component={Payment} selectedTrain={this.state.selectedTrain}/>

          
        </div>
        
      </BrowserRouter>
      
    );
  }
}

export default HomeRoot;
