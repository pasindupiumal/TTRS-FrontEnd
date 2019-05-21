import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegister from './Components/Login-Register-Root';
import HomeRoot from './Components/Home-Root';
import AboutUs from './Components/AboutUs';
import ProtectedRoute from './protected_route';
import Payment from './Components/Payment';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alert from './Components/Alerts';
import 'core-js';

const alertOptions = {
  timeout: 3000, 
  position: 'top center',
}

function App() {
  return (

    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alert/>
        <div className="App">
          <Switch>   
            <Route exact path="/" component={LoginRegister}/>
            <Route exact path="/SignUp" component={LoginRegister}/>
            <ProtectedRoute exact path="/Home" component={HomeRoot}/>
            <ProtectedRoute exact path="/Home/AboutUs" component={AboutUs}/>
            <ProtectedRoute exact path="/Home/Payment" component={Payment}/>
            <Route path="*" component={() => "404 Not Found"}/>
          </Switch>         
        </div> 
      </AlertProvider>
    </BrowserRouter>
   
  );
}

export default App;
