import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DeliveryClientForm from './components/deliveryClientForm/DeliveryClientForm';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Adhesion from './components/adhesion/Adhesion';
import Contact from './components/contactPage/Contact';
import ViewInvoice from './components/invoice/ViewInvoice';
import DownloadPdf from './components/invoice/DownloadPdf';
import Historical from './components/historique/Historical';
import MapDeliver from './components/mapping/mappingDeliver';
import Admin from './components/admin/Admin';
import MappingClient from './components/mapping/MappingClient';
import Partner from './components/partner/Partner';
import DashboardPro from './components/Dashboard/DashboardPro';
import MyOrders from './components/Dashboard/MyOrders';
import SignatureZone from './components/SignatureZone/SignatureZone';
import Announcement from './components/Dashboard/Announcement/Announcement';
import InfosDashboard from './components/Dashboard/InfosDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import DashboardClient from './components/Dashboard/DashboardClient';
import MyOrdersClient from './components/Dashboard/MyOrdersClient';
import ConfirmationAdhesion from './components/confirmationAdhesion/ConfirmationAdhesion';
import OrderUpdateConfirmation from './components/Dashboard/OrderUpdateConfirmation';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/nouvelle-commande" component={DeliveryClientForm} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/adhesion" component={Adhesion} />
      <Route path="/contact" component={Contact} />
      <Route path="/facture" component={ViewInvoice} />
      <Route path="/facture-download" component={DownloadPdf} />
      <Route path="/livraisons-effectuees" component={Historical} />
      <Route path="/historical" component={Historical} />
      <Route path="/map-deliver" component={MapDeliver} />
      <Route path="/admin" component={Admin} />
      <Route path="/map-client" component={MappingClient} />
      <Route path="/partner" component={Partner} />
      <Route path="/dashboard-pro" component={DashboardPro} />
      <Route path="/dashboard-client" component={DashboardClient} />
      <Route path="/my-orders" component={MyOrders} />
      <Route path="/mes-commandes-client" component={MyOrdersClient} />
      <Route path="/signature" component={SignatureZone} />
      <Route path="/annonces" component={Announcement} />
      <Route path="/informations-pro" component={InfosDashboard} />
      <Route path="/mes-infos" component={InfosDashboard} />
      <Route path="/demande-livraison" component={DeliveryClientForm} />
      <Route path="/confirmation-adhesion" component={ConfirmationAdhesion} />
      <Route path="/confirmation" component={OrderUpdateConfirmation} />
    </Switch>
  );
}

export default App;
