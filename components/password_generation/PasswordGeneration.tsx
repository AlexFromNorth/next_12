import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import styles from "./PasswordGeneration.module.scss";
import Checked from "../checked/Checked";

const PasswordGeneration = () => {
  const [length, setLength] = useState<number>(0);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [uniqSymbols, setUniqSymbols] = useState(true);
  const [password, setPassword] = useState<string[]>([]);

  const { passwords, setPasswords } = useStore();

  useEffect(() => {
    if (passwords.length > 0) {
      setPassword(passwords);
    }
  }, [passwords]);

  function addPassword(el: string) {
    let newPasswords = [...passwords, el];
    if (newPasswords.length > 6) {
      newPasswords = newPasswords.slice(1);
    }

    setPassword(newPasswords);
    setPasswords(newPasswords);
  }

  const generatePassword = () => {
    if (length > 0) {
      const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

      let characters = "";
      if (useUpperCase) characters += upperCaseLetters;
      if (useLowerCase) characters += lowerCaseLetters;
      if (useNumbers) characters += numbers;
      if (useSymbols) characters += symbols;

      let newPassword = "";
      for (let i = 0; i < length; i++) {
        let newCharacter = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        if (uniqSymbols) {
          characters = characters.replace(newCharacter, "");
        }

        newPassword += newCharacter;
      }

      addPassword(newPassword);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputs}>
        <p>Длина пароля</p>

        <input
          type="number"
          value={length}
          min={1}
          max={10}
          placeholder="Введите число"
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <Checked
          checked={useUpperCase}
          onToggle={(newState) => setUseUpperCase(newState)}
          text="Использовать прописные буквы"
        />

        <Checked
          checked={useLowerCase}
          onToggle={(newState) => setUseLowerCase(newState)}
          text="Использовать строчные буквы"
        />

        <Checked
          checked={useNumbers}
          onToggle={(newState) => setUseNumbers(newState)}
          text="Использовать цифры"
        />

        <Checked
          checked={useSymbols}
          onToggle={(newState) => setUseSymbols(newState)}
          text="Использовать символы: %, *, ), ?, @, #, $, ~"
        />

        <Checked
          checked={uniqSymbols}
          onToggle={(newState) => setUniqSymbols(newState)}
          text="Избегать повторения символов"
        />
      </div>

      <hr />

      <div className={styles.btn}>
        <button onClick={generatePassword}>Сгенерировать пароль</button>
      </div>
    </div>
  );
};

export default PasswordGeneration;
