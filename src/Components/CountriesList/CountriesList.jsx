import React, { useEffect, useState } from 'react';
import CountriesItem from '../CountriesItem/CountriesItem';
import './CountriesList.scss';

const CountriesList = ({ countries, filtredByRegion, step, setStep }) => {

  const [visibleCountries, setVisibleCountries] = useState([]);
  // const [countriesByRegion, setCountriesByRegion] = useState([]);

  const addLines = () => {
    setStep(step + 8);
  }

  useEffect(() => {
    setVisibleCountries(countries.slice(0, step));
  }, [countries, step, filtredByRegion])

  return (
    <div className='countries-list'>
      <div className='countries-list__wrapper'>
        {
          visibleCountries.map((elem, index) => {
            return <CountriesItem 
              flag={elem.flags.png} 
              name={elem.name} 
              capital={elem.capital}
              region={elem.region} 
              population={elem.population}
              code={elem.alpha3Code}
              key={index} />
          })
        }
      </div>
      {step < countries.length ? <button 
        className='countries-list__button-more'
        onClick={addLines}
        >More
      </button> : null
      }
    </div>
  );
};

export default CountriesList;