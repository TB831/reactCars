import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef(); // Ref for accessing DOM Element
    this.state = {
      spans: 0
    }
  }

  componentDidMount() { // Once initial component mounts(renders), Add event listener to the each imageRef with callback function to setSpans()
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  }

  render() {
    const { description, url } = this.props;
    const { spans } = this.state;

    return(
      <div className='card' style={{ gridRowEnd: `span ${spans}`, margin: `auto`}}>
        <img ref={this.imageRef} alt={description} src={url}></img>
        <p>{description}</p>
      </div>
    )
  }
}

export default ImageCard;