import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DishCard } from '../DishCard';
import './styles.css'


export function DishSlider({ sectionName, dishes, isAdmin }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    rows: 1,
    arrows: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToScroll: 1
        },
      }
    ],
  };
  // const { dishes } = category

  return (
    <div>
      <h2 className="subtitle">{sectionName}</h2>
      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <DishCard
            key={index}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            isFavourite={dish.isFavourite}
            isAdmin={dish.user}
          />
        ))}
      </Slider>
    </div>
  );
}
