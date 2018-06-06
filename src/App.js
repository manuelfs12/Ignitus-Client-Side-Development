import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Introduction/>
       	<Footer/>
      </div>
    );
  }
}

export default App;
