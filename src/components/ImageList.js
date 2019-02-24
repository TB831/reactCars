import React from 'react';

const renderImages = (images) => {
  return images.map((image, i) => {
    return (
      <div key={i}>
        <img alt={image.description} src={image.urls.regular} />
        <p>{image.description}</p>
      </div>
    )
  })
}

const ImageList = (props) => {
  const { images } = props;



  return (
    <div>
      {renderImages(images)}
    </div>
  );
}

 
export default ImageList;