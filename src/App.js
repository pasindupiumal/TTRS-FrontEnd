import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegister from './Components/Login-Register-Root';
import HomeRoot from './Components/Home-Root';
import AboutUs from './Components/AboutUs';
import ProtectedRoute from './protected_route';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginRegister}/>
          <Route path="/SignUp" component={LoginRegister}/>
          <ProtectedRoute path="/Home" component={HomeRoot}/>
          <ProtectedRoute path="/AboutUs" component={AboutUs}/>
          <Route path="*" component={() => "404 Not Found"}/>
        </Switch>
        
      </div> 
    </BrowserRouter>
  );
}

export default App;
