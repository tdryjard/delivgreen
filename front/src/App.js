import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Adhesion from './components/adhesion/Adhesion';
import ViewInvoice from './components/invoice/ViewInvoice';
import DownloadPdf from './components/invoice/DownloadPdf';
import Historical from './components/historique/Historical';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/facture" component={ViewInvoice} />
      <Route path="/facture-download" component={DownloadPdf} />
      <Route path="/historical" component={Historical} />
    </Switch>
  );
}

export default App;
