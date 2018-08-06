import React, { Component } from 'react';
import SavedLists from './components/SavedLists/SavedLists' ;
import { List } from './components/List/List';
import DisplayList from './components/DisplayList/DisplayList';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation list={ List }/>
        <SavedLists list={ List } />
        <DisplayList />
      </div>
    );
  }
}

export default App;
