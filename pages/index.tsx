// src/pages/index.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "../store/useStore";
import styles from "../styles/index.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = () => {
  const [inputName, setInputName] = useState("");
  const { setName } = useStore();

  const router = useRouter();

  const handleSave = () => {
    setName(inputName);
    localStorage.setItem("name", inputName);
    setInputName("");
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSave();
      router.push("/calculator");
    }
  };

  return (
    <>
      <Head>
        <title>Добро пожаловать</title>
        <meta
          name="description"
          content="Главная страница с навигацией по сайту."
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <button onClick={handleSave}>
              <Link href="/calculator">Начать</Link>
            </button>
            <span className={styles.name}>Ваше имя</span>
            <input
              type="text"
              placeholder="Как вас зовут?"
              value={inputName}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <hr />
          <div className={styles.links}>
            <Link href="/password-generator">Открыть генератор</Link>
            <Link href="/calculator">Открыть калькулятор</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
