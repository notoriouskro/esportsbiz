import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Overwatch from './pages/Overwatch/Overwatch';
import LOL from './pages/LOL/LOL';
import Dota2 from './pages/DOTA2/Dota2';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Overwatch" component={Overwatch} />
      <Route exact path="/LOL" component={LOL} />
      <Route exact path="/Dota2" component={Dota2} />
      </Switch>
      <Footer />
    </div>  
    </Router>
  );
}

export default App;
