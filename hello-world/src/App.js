import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import ReactDOM from 'react-dom'
import App from './App';
import Headerteam from './Headerteam';
import Display from './Display'
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ho!!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );  
  }
}

export default App;
*/
class TeamSelection extends Component{
  render() {
  return (
  <div>
  <Headerteam />
    <Display />
  </div>
    );
}
}

ReactDOM.render(<TeamSelection/>,document.getElementById('root'));

export default App;
