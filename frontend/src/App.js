import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './ui/Navbar'
import Home from './container/Home'

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar/>
      {this.props.children}
      </div>
    );
  }
}

export default App;
