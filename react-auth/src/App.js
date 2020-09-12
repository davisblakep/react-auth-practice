import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import SignupPage from './components/pages/SignupPage';
// import AddFriendPage from './components/AddFriendPage'

// Test private route by entering command:
//  localStorage.removeItem("token")
// in web console, then refresh page

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/* <PrivateRoute path="/dashboard/addfriend" component={AddFriendPage} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
