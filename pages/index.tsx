// src/pages/index.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '../store/useStore';
import styles from './index.module.scss';

const Home = () => {
  const [inputName, setInputName] = useState('');
  const { setName } = useStore();

  const handleSave = () => {
    setName(inputName);
    localStorage.setItem('name', inputName);
  };

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleSave}>Save Name</button>
        <div className={styles.links}>
          <Link href="/password-generator">Go to Password Generator</Link>
          <Link href="/calculator">Go to Calculator</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
