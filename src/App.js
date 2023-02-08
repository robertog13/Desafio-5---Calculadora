import React, { useContext } from 'react';
import context from './context';
import './App.css'

function App() {

  const {
    valueScreem,
    setValueScreem,
    result,
    setResult,
    operation,
    setOperation
  } = useContext(context);

  const  screem = (value, result) => {
    return (
      <div className='Screen'>
        <p className='Value'>{value} =</p>
        <p className='Result'>{result}</p>
      </div>
    )
  }

  const btn = (type, label, func) => {
    return (
      <button
      className={type}
      type='button'
      onClick={func}
      >
        {label}
      </button>
    )
  }


  const addDigScreen = (d) => {
    if ((d === '+' || d === '-' || d === '/' || d === '*') && operation) {
      setOperation(false);
      setValueScreem(result + d)
      return
    }
    if (operation) {
      setValueScreem(d);
      setOperation(false);
      return
    }
    const valueDigScreen = valueScreem + d;
    setValueScreem(valueDigScreen)
  }

  const clear = () => {
    setOperation(false);
    setValueScreem('');
    setResult(0);
    return
  }

  const Operation = (operation) => {
    if ( operation === 'bs') {
      let vscreen = valueScreem;
      vscreen = vscreen.substring(0,(vscreen.length - 1));
      setValueScreem(vscreen);
      setOperation(false);
      return
    }
    try{
      const r = eval(valueScreem);
      setResult(r);
      setOperation(true);
    } catch {
      setResult('Erro!')
    }
  }

  

  return (
    <div className='Back'>
    <div className='Calculator'>
      {screem(valueScreem, result)}
      <div className='Board'>
        <div className='teste'>
          {btn('btnBs', 'ce', () => Operation('bs'))}
          {btn('btn', 'c', clear)}
          {btn('btn','%', () => addDigScreen('%'))}
          {btn('btnOp','÷', () => addDigScreen('/'))}
        </div>

        <div className='teste'>
          {btn('btn','7', () => addDigScreen('7'))}
          {btn('btn','8', () => addDigScreen('8'))}
          {btn('btn','9', () => addDigScreen('9'))}
          {btn('btnOp','X', () => addDigScreen('*'))}
        </div>

        <div className='teste'>
          {btn('btn','4', () => addDigScreen('4'))}
          {btn('btn','5', () => addDigScreen('5'))}
          {btn('btn','6', () => addDigScreen('6'))}
          {btn('btnOp','-', () => addDigScreen('-'))}
        </div>

        <div className='teste'>
          {btn('btn','1', () => addDigScreen('1'))}
          {btn('btn','2', () => addDigScreen('2'))}
          {btn('btn','3', () => addDigScreen('3'))}
          {btn('btnOp','+', () => addDigScreen('+'))}
        </div>

        <div className='teste'>
          {btn('btn','+/-', () => addDigScreen('+/-'))}
          {btn('btn','0', () => addDigScreen('0'))}
          {btn('btn','.', () => addDigScreen('.'))}
          {btn('btnEqual','=', () => Operation('='))}
        </div>

      </div>

    </div>
    </div>
  );
}

export default App;
