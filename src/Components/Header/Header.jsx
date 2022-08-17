import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav className='header__container'>
        <Link to='/rest-countries-api' className='header__title'>
          <h1>Where in the world?</h1>
        </Link>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Header;