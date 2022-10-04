import React from "react";
import styles from "./input.module.css";
import { InputAdornment, TextField} from "@mui/material"
export const CustomInput = ({
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
      <TextField
      style={{width:"100%"}}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
           {icon}
          </InputAdornment>
        ),
      }}
        value={value}
        // className={styles.input}
        type={type}
        label={placeholder}
        name={name}
        onChange={(e) => onchange(e.target.name, e.target.value)}
        {...rest}
      />
    </div>
  );
};
