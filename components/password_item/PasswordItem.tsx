import { useState } from "react";
import styles from "./PasswordItem.module.scss";

interface PasswordItemProps {
  password: string;
}

const PasswordItem = ({ password }: PasswordItemProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.passwordItem}>
      <div className={styles.passwordText}>{password}</div>
      <button className={styles.copyButton} onClick={copyToClipboard}>
        <img src="/copy-icon.svg" alt="Copy" />
        {copied && <span className={styles.copiedMessage}>Cкопировано!</span>}
      </button>
    </div>
  );
};

export default PasswordItem;
