import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const Country = createContext();

function Context({ children }) {
  const [countryState, setCountry] = useState('INDIA');

  const handleCountry = (country) => {
    setCountry(country)
  }
  const contextValue = useMemo(() => ([
    countryState,
    handleCountry,
  ]), [countryState]);

  return <Country.Provider value={contextValue}>{children}</Country.Provider>;
}

Context.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Context;

export const CountryState = () => useContext(Country);
