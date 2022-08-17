import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { COUNTRY_API, COUNTRY_BY_CODE } from '../../utils/constants';
import './CountryPage.scss';
import defaultFlag from '../../assets/flag.svg';

const CountryPage = () => {

  const navigate = useNavigate();

  const {code} = useParams();
  const [countryData, setCountryData] = useState({});
  const [langString, setLangString] = useState('');
  const [borderCountries, setBorderCoutries] = useState([]);
  const [newBorders, setNewBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const createLangString = (arr) => {
    let langArr = [];
    for (let i = 0; i < arr.length; i++) {
      langArr.push(arr[i].name)
    }
    setLangString(langArr.join(', '));
  }

  useEffect(() => {
    axios.get(COUNTRY_API + code)
    .then(({ data }) => { 
      setCountryData(data);
      createLangString(data.languages)
      setBorderCoutries(data.borders);
      setIsLoading(false);
      return data.borders ? axios.get(COUNTRY_BY_CODE + data.borders.join(',')) : {}
    })
    .then(({data}) => {
      if (!data) return;
      setNewBorders(data);
    });
  }, [code])

  return (
    <div className='country'>
      <button className='country__button-back' onClick={() => navigate(-1)}>Back</button>
      <div className='country__info-wrapper'>
        <img src={countryData.flag || defaultFlag} alt='flag' className='country__image'/>
        { isLoading ? <div className='country__spinner'></div> :
          <div className='country__main-wrapper'>
          <h2 className='country__title'>{countryData.name}</h2>
          <div className='country__text-wrapper'>
            <p className='country__text'>Native Name: {countryData.nativeName}</p>
            <p className='country__text'>Population: {countryData.population.toLocaleString('en')}</p>
            <p className='country__text'>Region: {countryData.region}</p>
            <p className='country__text'>Sub Region: {countryData.subregion}</p>
            <p className='country__text'>Capital: {countryData.capital}</p>
            <p className='country__text'>Top Level Domain: {countryData.topLevelDomain}</p>
            <p className='country__text'>Currencies: {countryData.currencies[0].name}</p>
            <p className='country__text'>Languages: {langString}</p>
          </div>
          <div className='country__border-countries'>{}
            <p className='country__text'>Border Countries:</p>
            <ul className='border-countries__list'>
              { borderCountries ?
                newBorders.map((elem, index) => {
                  return <Link style={{ textDecoration: 'none' }} to={`../${elem.alpha3Code}`}  key={index}><li className='border-countries__item'>{elem.name}</li></Link>
                })
                : <li className='border-countries__item'>Not Found</li>
              }
            </ul>
          </div>
        </div>}
      </div>
    </div>    
  );
};

export default CountryPage;