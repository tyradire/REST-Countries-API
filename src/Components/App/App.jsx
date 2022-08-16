import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COUNTRIES_API } from '../../utils/constants';
import CountryPage from '../CountryPage/CountryPage';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import './App.scss';

function App() {

  const [countries, setCountries] = useState([]);
  const [filtredByRegion, setFiltredByRegion] = useState([]);
  const [step, setStep] = useState(8);

  useEffect(() => {
    axios.get(COUNTRIES_API).then(({ data }) => {
      setCountries(data);
      setFiltredByRegion(data);
    });
  }, [])

  return (
    <div className="app">
      <Header />
    <Routes>
      <Route path='/' element={<MainPage countries={countries} filtredByRegion={filtredByRegion} setFiltredByRegion={setFiltredByRegion} step={step} setStep={setStep} />} />
      <Route path='/:code' element={<CountryPage />} />
    </Routes>
    </div>
  );
}

export default App;
