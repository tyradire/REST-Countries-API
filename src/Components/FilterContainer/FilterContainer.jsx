import React, { useState } from 'react';
import CustomFilter from '../CustomFilter/CustomFilter';
import './FilterContainer.scss';

const FilterContainer = ({ countries, filtredByRegion, setFiltredByRegion, setStep }) => {

  const [searchInput, setSearchInput] = useState('');

  const filterBySearch = (e) => {
    e.preventDefault();
    console.log(searchInput, filtredByRegion)
    setFiltredByRegion(filtredByRegion.filter(elem => elem.name.toLowerCase().includes(searchInput.toLowerCase())))
  }

  return (
    <div className='filter-container'>
      <form onSubmit={(e) => filterBySearch(e)} className='filter-container__form'>
        <input 
          type='text' 
          className='filter-container__search' 
          value={searchInput}
          placeholder="Search for a country..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input 
          type='button'
          className='filter-container__button-reset'
          value='X'
          disabled={!searchInput}
          onClick={() => {setFiltredByRegion(countries); setSearchInput('');}}
        />
      </form>
      <CustomFilter countries={countries} setFiltredByRegion={setFiltredByRegion} setStep={setStep} />
    </div>
  );
};

export default FilterContainer;