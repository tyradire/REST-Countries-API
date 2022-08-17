import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CountriesItem.scss';

const CountriesItem = ({ flag, name, capital, region, population, code }) => {

  const navigate = useNavigate();

  return (
    <div className='countries-item'>
      <img src={flag} alt='flag' className='countries-item__image' onClick={() => navigate(code)}/>
      <Link className='countries-item__title' to={(code)}><p>{name}</p></Link>
      <p className='countries-item__info'>Population: {population.toLocaleString('en')}</p>
      <p className='countries-item__info'>Region: {region}</p>
      <p className='countries-item__info'>Capital: {capital}</p>
    </div>
  );
};

export default CountriesItem;