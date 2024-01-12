'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ImageCarousel = ({ style }) => {
  const images = [
    '/1.jpg',
    '/2.jpg',
    // Add more image URLs as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change 3000 to the desired autoplay interval in milliseconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay is handled separately
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
   <div style={{margin:20,width:'80%',...style,}}>
    <Slider  {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img  style={{width:'100%',height:600,objectFit:'stretch'}} src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageCarousel;