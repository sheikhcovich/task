import React from "react";
import styles from "./divider.module.css";
export const Divider = ({ text }) => {
  return (
    <div className={styles.divider}>
      <hr />
      <div>{text}</div>
      <hr />
    </div>
  );
};
