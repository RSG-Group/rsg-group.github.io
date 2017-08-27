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
            <Button redirect="https://github.com/RSG-Group/rsg-group.github.io">Fork Me</Button>
            <Button
              redirect="https://github.com/RSG-Group"
              style={{"width": "24px", height: "24px", "padding": "0px"}}>
              <GitHubLogo/>
            </Button>
          </span>
        </div>

        <a href="https://www.npmjs.com/package/line-intersection">
          <div className="app texts">
            <b>line-intersection</b> - Simple mini library for finding line and line-segment intersection
          </div>
        </a>

        <a href="https://github.com/RSG-Group/website">
          <div className="app texts">
            <b>website</b> - (Un)official RSG-Group website built in Material Design, Next.js, Express & more.
          </div>
        </a>
        
        <a href="https://github.com/RSG-Group/hyper-background">
          <div className="app texts">
            <b>hyper-background</b> - Change the background of your Hyper terminal (proof of concept).
          </div>
        </a>
        
        <a href="https://www.npmjs.com/package/rsg-components">
          <div className="app texts">
            <b>rsg-components</b> - Some React components with beautiful styling
          </div>
        </a>

        <a href="https://github.com/RSG-Group/Chess">
          <div className="app texts">
            <b>Chess</b> - Cool chess game
          </div>
        </a>

        <a href="https://build.phonegap.com/apps/2773889/builds">
          <div className="app texts">
            <b>Chess mobile</b> - The mobile version of RSG-Chess built with <b>PhoneGap</b>
          </div>
        </a>

      </div>
    );
  }
}

export default App;
