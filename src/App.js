import React, { Component } from 'react';
import Form from './components/Form.js';

import './App.css';

class App extends Component {
  state = {
    text: "Hej på MIG!"
  }

  render() {
    return (
        <div className="App">
          <Form text={this.state.text}/>
        </div>
    );
  }
}

export default App;
