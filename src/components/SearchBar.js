import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault(); // Keeps form from submitting
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image search</label>
            <input 
              type='text' 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value.toLowerCase() })}
              />
          </div>
        </form>
      </div>
    );
  }
}                             

export default SearchBar;