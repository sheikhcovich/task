import React from "react";
import styles from "./button.module.css";
export const Button = ({ text, disabled, ...rest }) => {
  return (
    <button disabled={disabled} className={styles.button} {...rest}>
      {text}
    </button>
  );
};
