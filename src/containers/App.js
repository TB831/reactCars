import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui container searchbar'>
        <SearchBar />
      </div>
    );  
  }
}

export default App;
