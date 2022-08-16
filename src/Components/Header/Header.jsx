import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav className='header__container'>
        <a href='/' className='header__title'>
          <h1>Where in the world?</h1>
        </a>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Header;