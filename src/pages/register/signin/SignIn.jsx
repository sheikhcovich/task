import React, { useState } from "react";
import styles from "../signup/signup.module.css";
import "./sign_in.css";
import { validate } from "../../../utils/utils";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button, Divider, Errors, Input, Loader } from "../../../components";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

const SignIn = ({ children }) => {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let { logIn } = useAuth();

  // useRedirect();
  const [fields, setfields] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();

  const handleOnChange = (name, value) => {
    setfields({ ...fields, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields.email, null, fields.password);
    setErrors(errs);
    console.log(errs);
    if (errs) return;

    try {
      setloading(true);
      await logIn(fields.email, fields.password);
      navigate("/", { replace: true });
    } catch (error) {
      setErrors({ email: error.message });
    }
    setloading(false);
  };
  return (
    <div className={styles.signup}>
      <p>Log in to iHistopathology Acount!</p>
      {loading && <Loader />}
      {errors && <Errors errors={errors} />}
      <form onSubmit={handleOnSubmit} className={styles.form}>
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
        <Button disabled={loading} type="submit" text="Log in" />
        <div className="options">
          <div className="remember_me">
            <input type="checkbox" id="rememberme" />
            <label htmlFor="rememberme">Remember Password</label>
          </div>
          <Link className="forgot_password" to="/forgot_password">
            Forgot Password
          </Link>
        </div>
      </form>
      <div className={styles.goingLog}>
        <span>
          Already have an account?&nbsp;
          <span
            className={styles.link}
            onClick={() => navigate("/signup", { replace: true })}
          >
            Sign Up
          </span>
        </span>
      </div>
      <Divider text="or Log in" />
      {children}
    </div>
  );
};
export default SignIn;
