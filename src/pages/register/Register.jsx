import React from "react";
import styles from "./register.module.css";

const Register = ({ children }) => {
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <p>welcome to</p>
            <img
              src={require("../../assets/images/IHistopathology-Logo-White.png")}
              alt="logo"
            />
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.image}>
            <img
              src={require("../../assets/images/IHistopathology-Logo.png")}
              alt="logo"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Register;
