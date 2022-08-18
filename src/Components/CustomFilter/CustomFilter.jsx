import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/use-oneclick-outside';
import './CustomFilter.scss';

const CustomFilter = ({ countries, setFiltredByRegion, setStep }) => {

  const refFilter = useRef();

  const [openCustomFilter, setOpenCustomFilter] = useState(false)

  useOnClickOutside(refFilter, () => setOpenCustomFilter(false));

  const openFilter = () => {
    setOpenCustomFilter(!openCustomFilter);
  }

  const selectRegion = (e) => {
    if (e.target.textContent === 'All World') {
      setFiltredByRegion(countries);
      setOpenCustomFilter(!openCustomFilter);
      setStep(8);
    } else {
      setFiltredByRegion(countries.filter(elem => elem.region === e.target.textContent))
      setOpenCustomFilter(!openCustomFilter);
      setStep(8);
    }
  }

  return (
    <div className='custom-filter'>
      <div className='custom-filter__button' onClick={openFilter}>Filter by Region</div>
      { openCustomFilter ?
        <ul ref={refFilter} className='custom-filter__list'>
          <li className='custom-filter__item' value='Oceania' onClick={(e) => selectRegion(e)}>All World</li>
          <li className='custom-filter__item' value='Africa' onClick={(e) => selectRegion(e)}>Africa</li>
          <li className='custom-filter__item' value='America' onClick={(e) => selectRegion(e)}>Americas</li>
          <li className='custom-filter__item' value='Asia' onClick={(e) => selectRegion(e)}>Asia</li>
          <li className='custom-filter__item' value='Europe' onClick={(e) => selectRegion(e)}>Europe</li>
          <li className='custom-filter__item' value='Oceania' onClick={(e) => selectRegion(e)}>Oceania</li>
        </ul>
        : null
      }
    </div>
  );
};

export default CustomFilter;