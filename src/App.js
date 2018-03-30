import React, {Component} from 'react';
import './App.css';

import Header from './components/header/header';
import Banner from './components/banner/banner';
import Game from './components/game/game';
import Footer from './components/footer/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Game/>
        <Footer/>
      </div>
    );
  }
}

export default App;
