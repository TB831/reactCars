import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef(); // Ref for accessing DOM Element
    this.state = {

    }
  }

  componentDidMount() { // Once initial component mounts(renders), Add event listener to the each imageRef with callback function to setSpans()
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, url } = this.props;

    return(
      <div>
        <img ref={this.imageRef} alt={description} src={url}></img>
        <p>{description}</p>
      </div>
    )
  }
}

export default ImageCard;