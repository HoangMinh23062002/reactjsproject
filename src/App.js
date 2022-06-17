import React, { Component } from "react";
import './App.css'
import Component_left from './components/component_left'
import Comright from './components/component_right'
import Req_content from './components/requir_content'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="Overall-component">
          <div className="Both-side">
            <Component_left/>
            <Req_content/>
          </div>
          <div>
          <Comright/>
          </div>
          <div>
        <Contact/>
          </div>
      </div>
    );
  }
}

export default App;
