import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="sideBar">
          RSG-Group
          <span className="barContent">
            G{/*this'll be replaced with the GitHub logo*/}
          </span>
        </h1>

        <a href="https://www.npmjs.com/package/rsg-components">
          <div className="app texts">
            <b>rsg-components</b> - Some React components with beautiful styling
          </div>
        </a>

        <a href="https://www.npmjs.com/package/line-intersection">
          <div className="app texts">
            <b>line-intersection</b> - Simple mini library for finding line and line segment intersection
          </div>
        </a>

      </div>
    );
  }
}

export default App;