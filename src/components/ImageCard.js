import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { alt, src } = this.props;

    return(
      <div>
        <img alt={alt} src={src}></img>
        <p>{alt}</p>
      </div>
    )
  }
}

export default ImageCard;