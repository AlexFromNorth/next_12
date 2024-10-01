// src/pages/calculator.tsx
import Calculator from "../components/calculator/Calculator";
import Header from "../components/header/Header";
import styles from "../styles/calculatorPage.module.scss";

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>Калькулятор</h1>
          <span>
            Очень Простой калькулятор обычный - только стандартные функции
            калькулятора: сложение, вычитание, умножение и деление. Простой
            калькулятор работает на смартфонах и ПК даже без интернета, не
            требует установки, быстро загружается и работает онлайн.
          </span>
        </div>
        <Calculator />
      </div>
    </>
  );
};

export default CalculatorPage;
