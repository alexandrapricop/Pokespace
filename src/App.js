import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PokedexContainer from './components/PokedexContainer/PokedexContainer';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PokestatContainer from './components/PokestatContainer/PokestatContainer';

class App extends React.Component{
  render(){

  return (
    <Router>
      <div className="App">
       <Navbar />
       <Route path='/' exact component={Home} />
       <Route path='/pokedex' exact component={PokedexContainer} />
       <Route path='/pokestats' exact component={PokestatContainer} />
       {/*<Footer />*/}
      </div>
    </Router>
  );
}
}

export default App;
