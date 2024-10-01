import { useState, useEffect } from "react";
import styles from "./Сalculator.module.scss";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [intermediateResult, setIntermediateResult] = useState<string | null>(
    null
  );

  const formatNumberWithCommas = (number: string) => {
    const [integerPart, decimalPart] = number.split(".");

    // REGEXP: Устанавливает запятые после каждого третьего целого числа с конца
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart !== undefined
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  };

  const removeFormatting = (formattedNumber: string) => {
    return formattedNumber.replace(/,/g, "");
  };

  const handleButtonClick = (value: string) => {
    if (value === ".") {
      // REGEXP: Разбиение строки на числа игнорируя операторы
      const lastNumber = input.split(/[\+\-\*\/]/).pop();
      if (lastNumber && lastNumber.includes(".")) {
        return;
      }
    }

    setInput((prev) => prev + value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const allowedKeys = "0123456789+-*/.%";
    if (allowedKeys.includes(e.key)) {
      handleButtonClick(e.key);
    }
    if (e.key === "Enter") {
      calculate();
    }
    if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      const cleanInput = removeFormatting(input);

      if (cleanInput && !/[+\-*/]$/.test(cleanInput)) {
        const result = eval(cleanInput);
        setInput(formatNumberWithCommas(result.toString()));
        setIntermediateResult(null);
      } else {
        setInput("Error");
      }
    } catch {
      setInput("Error");
    }
  };

  const invert = () => {
    try {
      const newValue = (-parseFloat(removeFormatting(input))).toString();
      setInput(formatNumberWithCommas(newValue));
    } catch {
      setInput("Error");
    }
  };

  useEffect(() => {
    const cleanInput = removeFormatting(input);

    if (cleanInput && !/[+\-*/]$/.test(cleanInput)) {
      try {
        const result = eval(cleanInput);
        setIntermediateResult(formatNumberWithCommas(result.toString()));
      } catch {
        setIntermediateResult(null);
      }
    } else {
      setIntermediateResult(null);
    }
  }, [input]);

  const clearCount = () => {
    setInput("");
    setIntermediateResult(null);
  };

  const formatInput = (input: string) => {
    const regex = /([+\-*/])/g;
    const parts = input.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className={styles.operator}>
          {part}
        </span>
      ) : (
        <span key={index}>{formatNumberWithCommas(part)}</span>
      )
    );
  };

  return (
    <div className={styles.container} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className={styles.calculator}>
        <h3 className={styles["intermediate-result"]}>
          {intermediateResult && intermediateResult}
        </h3>
        <h2 className={styles.display}>{formatInput(input) || "0"}</h2>
        <div className={styles.buttons}>
          <button className={`${styles.button}`} onClick={clearCount}>
            C
          </button>
          <button className={`${styles.button}`} onClick={invert}>
            +
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("%")}
          >
            %
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>

          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>

          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>

          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>

          <button
            className={`${styles.button} ${styles.wide}`}
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button className={`${styles.button}`} onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
