import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import firebaseApp from './firebase'
import * as ROUTES from "./constants/routePath";
// #region Components Import
import Home from './components/app/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// #endregion Components

function App() {
  return (

    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
    </Router>
  );
}

export default App;
