import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import {images} from './CarouselFunc'

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeImage1, setActiveImage1] = useState(null);
  const [activeImage2, setActiveImage2] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    afterChange: (index) => setActiveSlide(index),
    beforeChange: (oldIndex, newIndex) => {
      setActiveImageIndex(null);
    }
  };

  const handleImageClick1 = (image) => {
    setActiveImageIndex(image.id);
    setActiveImage1((prevImage) =>
      prevImage && prevImage.id === image.id ? null : image
    );
  };

  const handleImageClick2 = (image) => {
    setActiveImageIndex(image.id);
    setActiveImage2((prevImage) =>
      prevImage && prevImage.id === image.id ? null : image
    );
  };

  return (
    <div>
      <div className="carousel-container">
        <h1>Meus Filmes</h1>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id}>
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick1(image)}
                  className="carousel-image"
                />
                {activeImageIndex === image.id && activeImage1 && activeImage1.id === image.id && (
                  <div className="text-container">
                    <h4>{activeImage1.title}</h4>
                    <p>{activeImage1.text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-container">
        <h1>Lançamentos</h1>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id}>
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick2(image)}
                  className="carousel-image"
                />
                {activeImageIndex === image.id && activeImage2 && activeImage2.id === image.id && (
                  <div className="text-container">
                    <p>{activeImage2.text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
