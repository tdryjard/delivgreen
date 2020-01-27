import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Adhesion from './components/adhesion/Adhesion';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
