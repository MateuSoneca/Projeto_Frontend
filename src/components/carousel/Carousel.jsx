import React from "react";
import { Main } from "../Main";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Logo } from "../Logo";
import nike from '../../assets/nike.png'
import n from '../../assets/1.jpg'
import i from '../../assets/2.webp'
import k from '../../assets/3.png'
import e from '../../assets/4.png'

export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <>
    <h1>Assistindo</h1>
    <Slider>
      <div>
        <Logo/>
      </div>
      <div>
        <img src={nike}/>
      </div>
      <div>
        <img src={n}/>
      </div>
      <div>
        <img src={i}/>
      </div>
      <div>
        <img src={k}/>
      </div>
      <div>
        <img src={e}/>
      </div>
    </Slider>
    <h1>vou assistir</h1>
    <Slider>
      <div>
        <img src={nike}/>
      </div>
      <div>
        <Logo/>
      </div>
    </Slider>
    <h1>lançamentos</h1>
    <Slider>
      <div>
        <img src={nike}/>
      </div>
      <div>
        <Logo/>
      </div>
    </Slider>
    <h1>seila</h1>
    <Slider>
      <div>
        <img src={nike}/>
      </div>
      <div>
        <Logo/>
      </div>
    </Slider>
    </>
  );
};
