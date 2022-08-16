import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COUNTRY_API } from '../../utils/constants';
import './CountryPage.scss';

const CountryPage = () => {

  const {code} = useParams();
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    axios.get(COUNTRY_API + code).then(({ data }) => {
      setCountryData(data);
    });
  }, [])

  console.log(countryData);

  return (
    <div className='country'>
      <button className='country__button-back'>Back</button>
      <div className='country__info-wrapper'>
        <img src={countryData.flag} alt='flag' className='country__image'/>
        <div className='country__text-wrapper'>
          <h2 className='country__title'>{countryData.name}</h2>
        </div>
      </div>
    </div>    
  );
};

export default CountryPage;