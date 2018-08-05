import React, { Component } from 'react';
import DisplayList from './components/DisplayList/DisplayList';
import { List } from './components/List/List';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayList list={ List } />
      </div>
    );
  }
}

export default App;
