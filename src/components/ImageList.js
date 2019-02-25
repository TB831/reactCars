import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const renderImages = (images) => {
  return images.map(image => {
    return (
      <ImageCard
        key={image.id} 
        alt={image.description} 
        src={image.urls.regular}
        />
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