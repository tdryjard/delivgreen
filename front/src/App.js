import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Adhesion from './components/adhesion/Adhesion';
import Contact from './components/contactPage/Contact';
import ViewInvoice from './components/invoice/ViewInvoice';
import DownloadPdf from './components/invoice/DownloadPdf';
import Historical from './components/historique/Historical';
import Admin from './components/admin/Admin';
import MappingClient from './components/mapping/MappingClient';
import DeliveryList from './components/ListDelivery/DeliveryList';
import DetailListAdhesionPart from './components/detailAdhesionPart/DetailListAdhesionPart';
import DetailList from './components/deliverymanDetail/DetailList';
import './App.css';
import DashboardPro from './components/Dashboard/DashboardPro';
import MyOrders from './components/Dashboard/MyOrders';
import SignatureZone from './components/SignatureZone/SignatureZone';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/contact" component={Contact} />
      <Route path="/facture" component={ViewInvoice} />
      <Route path="/facture-download" component={DownloadPdf} />
      <Route path="/livraisons-effectuees" component={Historical} />
      <Route path="/historical" component={Historical} />
      <Route path="/admin" component={Admin} />
      <Route path="/map-client" component={MappingClient} />
      <Route path="/delivery-man" component={DeliveryList} />
      <Route
        path="/detail-adhesion-particulier"
        component={DetailListAdhesionPart}
      />
      <Route path="/dashboard-pro" component={DashboardPro} />
      <Route path="/my-orders" component={MyOrders} />
      <Route path="/detail-list" component={DetailList} />
      <Route path="/signature" component={SignatureZone} />
    </Switch>
  );
}

export default App;
