import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Adhesion from './components/adhesion/Adhesion';
import AdhesionPro from './components/adhesionPro/AdhesionPro';
import './App.css';
import ClientArea from './components/clientArea/ClientArea';
import DashboardPro from './components/Dashboard/DashboardPro';
import MyOrders from './components/Dashboard/MyOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/adhesion-pro" component={AdhesionPro} />
      <Route path="/espace-perso" component={ClientArea} />
      <Route path="/dashboard-pro" component={DashboardPro} />
      <Route path="/my-orders" component={MyOrders} />
    </Switch>
  );
}

export default App;
