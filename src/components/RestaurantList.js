import React from 'react';
import { Link } from 'react-router-dom';

import './css/restau.css';

const RestaurantList = props => {
  const url = 'https://via.placeholder.com/290x290?text=No Restau Image';

  const restauImage = props.restaurants.map(restau => {
    const {
      id,
      thumb,
      name,
      location,
      user_rating,
      all_reviews_count
    } = restau.restaurant;
    const srcLogic = thumb === '' ? url : thumb;
    return (
      <Link to={`/getDetails/${id}`} key={id}>
        <div className='ui orange card'>
          <div className='image'>
            <img src={srcLogic} alt='' />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
            <small>{location['address']}</small>
          </div>
          <div className='extra content'>
            <span>{user_rating.aggregate_rating}</span>
            <i className='favorite icon'></i>
            <span> | {all_reviews_count} Reviews</span>
            <span className='right floated'>{user_rating.votes} votes</span>
          </div>
        </div>
      </Link>
    );
  });
  const resultFunc = () => {
    const { errorMsg } = props;
    if (errorMsg.length > 0) {
      return (
        <div className='ui segment one'>
          <h1 className='error'>{errorMsg}</h1>
        </div>
      );
    } else {
      return (
        <div className='ui segment one'>
          <div>Search Results: {props.resultsLen}</div>
          <hr />
          <div className='ui three cards'>{restauImage}</div>
        </div>
      );
    }
  };
  return (
    <div>
      <div className='icon img'></div> <div className='ui divider two'></div>
      {resultFunc()}
      <br />
      <br />
    </div>
  );
};

export default RestaurantList;
