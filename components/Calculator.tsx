
// src/pages/calculator.tsx
import { useState } from 'react';
import Header from '../components/Header';
import styles from './calculator.module.scss';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const allowedKeys = '0123456789+-*/.';
    if (allowedKeys.includes(e.key)) {
      setInput((prev) => prev + e.key);
    }
    if (e.key === 'Enter') {
      calculate();
    }
    if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Simple eval for calculation
    } catch {
      setInput('Error');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container} onKeyDown={handleKeyDown} tabIndex={0}>
        <div className={styles.calculator}>
          <div className={styles.display}>{input || '0'}</div>
          <div className={styles.buttons}>
            {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((value) => (
              <button key={value} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            ))}
            <button onClick={() => setInput('')}>C</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
