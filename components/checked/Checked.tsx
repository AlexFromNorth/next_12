// import { useState } from "react";
// import styles from "./Checked.module.scss";
// import Link from "next/link";

// const Checked = (checked:boolean) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((isActive) => !isActive);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.check}>{checked && <img src="./check.png" alt="" />}</div>
//       <span className={styles.text}>text</span>
//     </div>
//   );
// };

// export default Checked;

import { useState } from "react";
import styles from "./Checked.module.scss";

interface CheckedProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  text: string;
}

const Checked = ({ checked, onToggle, text }: CheckedProps) => {
  const [isActive, setIsActive] = useState(checked);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    onToggle(!isActive); 
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.check}>
        {isActive && <img src="/check.png" alt="checked" />}{" "}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Checked;
