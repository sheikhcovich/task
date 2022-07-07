import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import styles from "./social.module.css";

export const Social = () => {
  const [error, seterror] = useState();
  let { signInWithGoogle } = useAuth();
  let navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/", { replace: true });
    } catch (error) {
      seterror(error.message);
    }
  };
  return (
    <>
      <div className={styles.social}>
        <button onClick={signIn} className={styles.icon}>
          G+
        </button>
        <button className={styles.icon}>f</button>
        <button className={styles.icon}>in</button>
      </div>
      {error && <h3>{error}</h3>}
    </>
  );
};
