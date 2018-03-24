import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header/Header';

class App extends Component {

  HeaderTitle = "Memory Game";

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
