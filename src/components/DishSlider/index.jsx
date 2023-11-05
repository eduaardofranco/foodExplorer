import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DishCard } from '../DishCard';
import './styles.css'
import { api } from '../../services/api';


export function DishSlider({ dishes, isAdmin }) {
  const imageUrl = `${api.defaults.baseURL}/files/`

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
      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <DishCard
            key={String(index)}
            img={imageUrl + dish.image}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            isFavourite={dish.isFavourite}
            isAdmin={dish.user}
          />
        ))}
      </Slider>
    </div>
  );
}
