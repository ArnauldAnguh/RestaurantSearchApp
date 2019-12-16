import React from 'react';
import { Link } from 'react-router-dom';

const RestauDetails = props => {
  const {
    thumb,
    phone_numbers,
    name,
    cuisines,
    currency,
    average_cost_for_two,
    all_reviews_count,
    establishment,
    highlights,
    timings
  } = props.data;
  const url = 'https://via.placeholder.com/728x90?text=Ooops!! No Restau Image';
  const propsData = {
    location: () => {
      let values = [];
      for (let key in props.data.location) {
        values.push(props.data.location[key]);
      }
      return (
        <table
          className='ui celled padded orange table'
          style={{ marginBottom: '10px' }}
        >
          <thead>
            <tr>
              <th>Address</th>
              <th>city</th>
              <th>latitude</th>
              <th>locality</th>
              <th>zipcode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='single line'>{values[0]}</td>
              <td>{values[2]}</td>
              <td className='right aligned'>{values[5]}</td>
              <td> {values[1]}</td>
              <td> {values[6]}</td>
            </tr>
          </tbody>
        </table>
      );
    },
    rating: () => {
      let rate = [];
      for (let key in props.data.user_rating) {
        rate.push(props.data.user_rating[key]);
      }
      return (
        <span
          title={rate[1]}
          style={{
            color: 'white',
            backgroundColor: 'green',
            padding: '0 2px'
          }}
        >
          {rate[0]}
          <i className='favorite icon'></i>
        </span>
      );
    },
    photos: () => {
      let data = [];
      for (let key in props.data.photos) {
        data.push(props.data.photos[key].photo);
      }
      const result = data.map(item => {
        const { thumb_url, user, friendly_time, caption, id } = item;

        const text = caption ? caption : `By ${user.name}`;
        return (
          <div className='item' key={id}>
            <div className='ui small image'>
              <img className='ui big image' alt={url} src={thumb_url} />
            </div>
            <div className='content'>
              <div className='header'>{text}</div>
              <div className='meta'>
                <span className='price'>uploaded on</span>
                <span className='stay'>{friendly_time}</span>
              </div>
            </div>
          </div>
        );
      });
      return result;
    },
    img: () => {
      return thumb ? thumb : url;
    }
  };
  return (
    <div>
      <div
        className='ui segment one'
        style={{
          marginBottom: '0'
        }}
      >
        <Link to='/' className='ui orange button' style={{ width: '150px' }}>
          Back
        </Link>
      </div>
      <div className='ui segment details'>
        <div className='detailHead'>
          <div className='imgDiv'>
            <img src={propsData.img()} alt='' />
          </div>
          <h1>{name}</h1>
          <div className='extra content'>
            {propsData.rating()}
            <span
              style={{
                color: 'blue'
              }}
            >
              | {all_reviews_count} Reviews
            </span>
            <span className='tel'> | Call: {phone_numbers}</span>
          </div>
        </div>
        <hr />
        <div className='ui divided list'>
          <div className='item'>
            <div className='content'>
              <div className='header'>Average_cost_for_two</div>
              {average_cost_for_two}
            </div>
          </div>
          <div className='item'>
            <div className='header'>Currency</div>
            {currency}
          </div>
          <div className='item'>
            <div className='header'>Location</div>
            {propsData.location()}
          </div>
          <div className='item'>
            <div className='header'>Establishment</div>
            {establishment}
          </div>
          <div className='item'>
            <div className='header'>Timings</div>
            {timings}
          </div>
          <div className='item'>
            <div className='header'>Highlights</div>
            {highlights + ''}
          </div>
          <div className='item'>
            <div className='header'>Cuisines</div>
            {cuisines}
          </div>
          <div className='item'></div>
        </div>
        <div
          className='header'
          style={{ textAlign: 'center', color: 'orangered' }}
        >
          Restaurant photos
        </div>
        <div className='ui items'>{propsData.photos()}</div>
      </div>
    </div>
  );
};

export default RestauDetails;
