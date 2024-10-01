import { useState } from "react";
import styles from "./Burger.module.scss";
import Link from "next/link";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <div className={styles.wrapper}>
      <div id="menu">
        <div className={styles.menu_bar} onClick={handleClick}>
          <div id="bar1" className={styles.bar}></div>
          <div id="bar2" className={styles.bar}></div>
          <div id="bar3" className={styles.bar}></div>
        </div>
        <nav
          className={styles.nav + "" + (isActive ? styles.change : "")}
          id={styles.nav}
        >
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/password-generator">Генератор паролей</Link>
            </li>
            <li>
              <Link href="/calculator">Калькулятор</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
