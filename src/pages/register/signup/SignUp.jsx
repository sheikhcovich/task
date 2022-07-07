import React, { useState } from "react";
import styles from "./signup.module.css";
import { validate } from "../../../utils/utils";

import {
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import { Button, Divider, Errors, Input, Loader } from "../../../components";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const SignUp = ({ children }) => {
  const [fields, setfields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState();
  const { signUp } = useAuth();
  let navigate = useNavigate();

  const handleOnChange = (name, value) => {
    setfields({ ...fields, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields.email, fields.username, fields.password);
    setErrors(errs);
    console.log(errs);
    if (errs) return;

    try {
      setloading(true);
      await signUp(fields.email, fields.password);
      navigate("/", { replace: true });
    } catch (error) {
      setErrors({ email: error.message });
    }
    setloading(false);
  };

  return (
    <div className={styles.signup}>
      <p>Sign Up and Start Learning!</p>
      {loading && <Loader />}
      {errors && <Errors errors={errors} />}
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <Input
          value={fields.username}
          name="username"
          type="text"
          placeholder="Name"
          icon={<PersonOutlined className={styles.icon} />}
          onchange={handleOnChange}
        />
        <Input
          value={fields.email}
          name="email"
          type="email"
          placeholder="Email"
          icon={<EmailOutlined className={styles.icon} />}
          onchange={handleOnChange}
        />
        <Input
          value={fields.password}
          name="password"
          type="password"
          placeholder="Password"
          icon={<LockOutlined className={styles.icon} />}
          onchange={handleOnChange}
        />
        <Button disabled={loading} type="submit" text="sign up" />
      </form>
      <div className={styles.goingLog}>
        <span>
          Already have an account?&nbsp;
          <span
            className={styles.link}
            onClick={() => navigate("/login", { replace: true })}
          >
            Log In
          </span>
        </span>
      </div>
      <Divider text="or Create account with" />
      {children}
      <p className={styles.terms}>
        By signing up you agree to our <a href="#">Terms of Use</a> and
        <a href="#"> Privacy Policy</a>
      </p>
    </div>
  );
};

export default SignUp;
