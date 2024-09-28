// src/components/Header.tsx
import Link from 'next/link';
import { useStore } from '../store/useStore';
import styles from './Header.module.scss';

const Header = () => {
  const { name } = useStore();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/password-generator">Password Generator</Link>
        <Link href="/calculator">Calculator</Link>
      </nav>
      <div className={styles.profile}>
        <img src="/default-avatar.png" alt="Avatar" className={styles.avatar} />
        <span>{name || 'Guest'}</span>
      </div>
    </header>
  );
};

export default Header;
