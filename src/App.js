import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Banner from './components/banner/banner';
import Game from './components/game/game';
import Footer from './components/footer/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0
    }

    this.setScore = this.setScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  setScore() {
    this.setState({ score: this.state.score + 1 });
    if (this.state.topScore <= this.state.score) {
      this.setState({ topScore: this.state.score + 1 });
    }
  }

  resetScore() {
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div className="App">
        <Header state={this.state} />
        <Banner />
        <Game score={this.state.score} setScore={this.setScore} resetScore={this.resetScore} />
        <Footer />
      </div>
    );
  }
}

export default App;
