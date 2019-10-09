import React from 'react';
import Quotes from '../../components/Quotes/Quotes';
import Game from '../../components/Game/Game';
import Video from '../../components/Video/Video';
import Teams from '../../components/Teams/Teams';



function Home() {
  return (
    <div className="App">
      <Quotes />
      <Game />
      <Video />
      <Teams />
    </div>  
  );
}

export default Home;