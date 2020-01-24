import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Signin from './components/signForms/signin/Signin';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
