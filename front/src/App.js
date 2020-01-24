import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DeliveryClientForm from './components/deliveryClientForm/DeliveryClientForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DeliveryClientForm />
    </div>
  );
}

export default App;
