import React, { Component } from "react";
import './App.css'
import Comleft from './components/component_left'
import Comright from './components/component_right'

class App extends Component {
  render() {
    return (
      <div className="Overall-component">
          <div>
          <Comleft/>
          </div>
          <div>
          <Comright/>
          </div>
      </div>
    );
  }
}

export default App;
