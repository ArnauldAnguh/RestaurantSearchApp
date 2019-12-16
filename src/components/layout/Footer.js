import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p className='footer'>
        &copy; copyright {date} Fastest Search Engines
        <br />
        <span>Developed by Arnauld Anguh</span>
      </p>
    </footer>
  );
};

export default Footer;
