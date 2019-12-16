import React from 'react';

import Title from './Title';

const Header = () => {
  const span = () => {
    const body = document.querySelector('body');
    body.classList.toggle('changeSize');
  };
  const theme = () => {
    const bgElm = document.querySelector('body');
    bgElm.classList.toggle('changeBg');
  };

  return (
    <div className='page header'>
      <i className='ui icon theme' title='Change Theme' onClick={theme}></i>
      <i
        className='ui icon mobile alternate device'
        title='View Media Size'
        onClick={span}
      ></i>
      <Title />
    </div>
  );
};

export default Header;
