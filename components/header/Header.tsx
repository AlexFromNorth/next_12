// src/components/Header.tsx
import Link from "next/link";
import { useStore } from "../../store/useStore";
import styles from "./Header.module.scss";
import Image from "next/image";
import Burger from "../burger/Burger";

const Header = () => {
  const { name } = useStore();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          width="143px"
          height="24px"
          alt="Picture of the author"
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/password-generator">Генератор паролей</Link>
        <Link href="/calculator">Калькулятор</Link>
      </nav>
      <div className={styles.profile}>
        <span margin-right="8px">{name || "Ваше имя"}</span>
        <Image src="/avatar.png" width="32px" height="32px" alt="Avatar" />
      </div>
      <Burger />
    </header>
  );
};

export default Header;
