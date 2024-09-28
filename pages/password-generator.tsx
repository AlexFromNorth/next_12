// src/pages/password-generator.tsx
import { useState } from 'react';
import Header from '../components/Header';
import styles from './password-generator.module.scss';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [useUpperCase, setUseUpperCase] = useState(false);
  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characters = '';
    if (useUpperCase) characters += upperCaseLetters;
    if (useLowerCase) characters += lowerCaseLetters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {

      // сделать проверку что буквы еще нет в новом пароле

      let newCharacter = characters.charAt(Math.floor(Math.random() * characters.length));

      newPassword += newCharacter

    }

    setPassword(newPassword);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <label>
            Password Length:
            <input 
              type="number" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))} 
            />
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={useUpperCase} 
              onChange={(e) => setUseUpperCase(e.target.checked)} 
            />
            Use Uppercase Letters
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={useLowerCase} 
              onChange={(e) => setUseLowerCase(e.target.checked)} 
            />
            Use Lowercase Letters
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={useNumbers} 
              onChange={(e) => setUseNumbers(e.target.checked)} 
            />
            Use Numbers
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={useSymbols} 
              onChange={(e) => setUseSymbols(e.target.checked)} 
            />
            Use Symbols
          </label>
          <button onClick={generatePassword}>Generate Password</button>
          {password && <p className={styles.password}>Generated Password: {password}</p>}
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
