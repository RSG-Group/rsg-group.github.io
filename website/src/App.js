import React, { Component } from 'react';
import Button from './Components/Button';
import GitHubLogo from './Components/GitHubLogo';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="sideBar">
          RSG-Group
          <span className="barContent">
            <Button style={{"margin-top": "2px"}}>Fork Me</Button>
            <Button style={{"width": "24px", height: "24px"}}>
              <GitHubLogo/>
            </Button>
          </span>
        </div>

        <a href="https://www.npmjs.com/package/rsg-components">
          <div className="app texts">
            <b>rsg-components</b> - Some React components with beautiful styling
          </div>
        </a>

        <a href="https://www.npmjs.com/package/line-intersection">
          <div className="app texts">
            <b>line-intersection</b> - Simple mini library for finding line and line-segment intersection
          </div>
        </a>

      </div>
    );
  }
}

export default App;
