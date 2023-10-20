import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DishCard } from '../DishCard';
import './styles.css'

export function DishSlider({ sectionName, dishes }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    // slidesToShow: 2,
    // slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const { dishes } = category

  return (
    <div>
      <h2>{sectionName}</h2>
      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <DishCard
            key={index}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            isFavourite={dish.isFavourite}
          />
        ))}
      </Slider>
    </div>
  );
}
