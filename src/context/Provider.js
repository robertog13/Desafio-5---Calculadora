import React, { useState } from "react";
import PropTypes from 'prop-types';
import FilterContext from './index';

export default function Provider({ children }) {
  const [valueScreem, setValueScreem] = useState('');
  const [result, setResult] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operation, setOperation] = useState(false);

  const contextValue = {
    valueScreem,
    setValueScreem,
    result,
    setResult,
    acumulador,
    setAcumulador,
    operation,
    setOperation
    
  }

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};