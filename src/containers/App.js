import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import './App.css';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos?', {  // GET req to unsplash
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    })
      .then((res) => this.setState({ images: res.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    const { images } = this.state;

    return (
      <div className='ui container searchbar'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Images: {images.length}
      </div>
    );  
  }
}

export default App;
