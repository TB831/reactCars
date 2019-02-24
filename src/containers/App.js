import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import './App.css';

class App extends Component {
  onSearchSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className='ui container searchbar'>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );  
  }
}

export default App;
