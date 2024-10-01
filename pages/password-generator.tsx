// src/pages/passwords.tsx
import { useStore } from "../store/useStore";
import styles from "../styles/password-generatorPage.module.scss";
import Header from "../components/header/Header";
import PasswordGeneration from "../components/password_generation/PasswordGeneration";
import PasswordItem from "../components/password_item/PasswordItem";
import Head from "next/head";

const PasswordList = () => {
  const passwords = useStore((state) => state.passwords);

  return (
    <>
      <Head>
        <title>Генерация пароля</title>
        <meta
          name="description"
          content="Генерация пароля с различными вариантами и длинной."
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Генератор паролей</h1>
        <div className={styles.wrapper}>
          <PasswordGeneration />
          <div className={styles.results}>
            {passwords.length > 0 ? (
              passwords.map((password, index) => (
                <PasswordItem key={index} password={password} />
              ))
            ) : (
              <p>Пароли пока не сгенерированы.</p>
            )}
            <p>Результаты:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordList;
