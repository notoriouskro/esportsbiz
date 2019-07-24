import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
import Video from './components/Video/Video';
import Teams from './components/Teams/Teams';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game />
      <Video />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
