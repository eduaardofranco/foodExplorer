import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DishCard } from '../DishCard';
import './styles.css'
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { DishCardSkeleton } from '../Skeletons/DishCardSkeleton';


export function DishSlider({ category_id, onSearch }) {
  const imageUrl = `${api.defaults.baseURL}/files/`
  
  const [categories, setCategories] = useState([])
  const [dishes, setDishes] = useState([])
  const [favourites, setFavourites] = useState([])
  const [search, setSearch] = useState('')
  const [showSkeletonCard, setShowSkeletonCard] = useState(true)

  const navigate = useNavigate()

  function handleDetail(event, id) {
    event.preventDefault()
    navigate(`/detail/${id}`)
  }

  const handleToggleFavourite = async (event, id) => {
    
    try {
      const isAlreadyFavourite = favourites.some((favorite) => favorite.dish_id === id);

      if (isAlreadyFavourite) {
        await api.delete(`/favourites/${id}`);
      } else {
        await api.post(`/favourites/${id}`);
      }

      const updatedResponse = await api.get('/favourites');
      setFavourites(updatedResponse.data);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }

  }
  //fetch dishes
  //if type search, fetch again based on parameter
  useEffect(() => {
    setShowSkeletonCard(true)
      api.get(`/dishes?nameOrIngredient=${onSearch}`)
      .then(dishesData => {
        setDishes(dishesData.data)
        setShowSkeletonCard(false)

      })

  }, [onSearch])

  //fetch categories
  useEffect(() => {
      api.get('category')
      .then(response => {
        setCategories(response.data)
      })
  },[])

  //fetch favourites
  useEffect(() => {
      api.get('favourites')
      .then(response => {
        setFavourites(response.data)
      })
  },[])

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

  return (
    <div>
      <Slider {...settings}>
        {
            
          dishes && dishes.map((dish, index) => (
            //map only dishes with category_id equal to parameter received
            dish.category_id === category_id ?
            <DishCard
              id={dish.id}
              key={String(index)}
              img={imageUrl + dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              onClick={(event) => handleDetail(event, dish.id)}
              //check if it is favourited
              isFavourite={favourites.some((favorite) => favorite.dish_id === dish.id)}
              onClickFavourite={(event) => handleToggleFavourite(event, dish.id)}
            />
            : null
          ))
          }
          {/* show skeleton while fetching dishes */}
        { showSkeletonCard
        ?[1,2,3].map(index => (
          <>
            <DishCardSkeleton key={index} />
          </>
        ))
        : null
      }
      </Slider>
    </div>
  );
}
