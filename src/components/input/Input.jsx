import React from "react";
import styles from "./input.module.css";
export const Input = ({
  type = "text",
  icon,
  placeholder,
  name,
  value,
  onchange,
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      {icon}
      <input
        value={value}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => onchange(e.target.name, e.target.value)}
        {...rest}
      />
    </div>
  );
};
