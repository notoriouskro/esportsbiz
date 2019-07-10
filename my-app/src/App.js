import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
