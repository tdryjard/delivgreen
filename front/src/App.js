import React from 'react';
import Accueil from './components/accueil/Accueil';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Accueil />
      <NavBar />
    </div>
  );
}

export default App;
