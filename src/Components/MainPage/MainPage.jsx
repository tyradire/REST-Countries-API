import React from 'react';
import CountriesList from '../CountriesList/CountriesList';
import FilterContainer from '../FilterContainer/FilterContainer';
import './MainPage.scss';

const MainPage = ({ countries, filtredByRegion, setFiltredByRegion, step, setStep }) => {

  return (
    <div className='main'>
      <FilterContainer countries={countries} filtredByRegion={filtredByRegion} setFiltredByRegion={setFiltredByRegion} setStep={setStep} />
      <CountriesList countries={filtredByRegion} filtredByRegion={filtredByRegion}  step={step} setStep={setStep} />
    </div>
  );
};

export default MainPage;