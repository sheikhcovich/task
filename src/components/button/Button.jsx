import React from "react";
import styles from "./button.module.css";
import {Button} from "@mui/material"
export const CustomButton = ({ text, disabled, ...rest }) => {
  return (
    <Button variant="contained" className={styles.button} disabled={disabled}  {...rest}>
      {text}
    </Button>
  );
};
