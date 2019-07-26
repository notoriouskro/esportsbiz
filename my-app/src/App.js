import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Quotes from './components/Quotes/Quotes';
import Game from './components/Game/Game';
import Video from './components/Video/Video';
import Teams from './components/Teams/Teams';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Quotes />
      <Game />
      <Video />
      <Teams />
      <Footer />
    </div>  
  );
}

export default App;
