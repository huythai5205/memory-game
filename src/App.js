import React, {Component} from 'react';
import './App.css';

import Header from './components/header/header';
import Banner from './components/banner/banner';
import Game from './components/game/game';
import Footer from './components/footer/footer';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      score: 0,
      topScore:0
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header state={this.state}/>
        <Banner/>
        <Game state={this.state}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
