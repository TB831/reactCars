import React from 'react';
import './ImageList.css';

const renderImages = (images) => {
  return images.map(image => {
    return (
      <div key={image.id}>
        <img alt={image.description} src={image.urls.regular} />
        <p>{image.description}</p>
      </div>
    )
  })
}

const ImageList = (props) => {
  const { images } = props;

  return (
    <div className='image-list'>
      {renderImages(images)}
    </div>
  );
}

 
export default ImageList;