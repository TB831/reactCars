import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import './App.css';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

class App extends Component {

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos?', {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });
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
