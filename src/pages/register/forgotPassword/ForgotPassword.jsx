import { EmailOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Errors, Input, Loader } from "../../../components/";
import { useAuth } from "../../../context/AuthContext";
import { validate } from "../../../utils/utils";
import styles from "../signup/signup.module.css";

const ForgotPassword = () => {
  const [fields, setfields] = useState({
    email: "",
  });
  const [details, setdetails] = useState();
  const [loading, setloading] = useState(false);
  const { sendPasswordReset } = useAuth();
  let navigate = useNavigate();
  const handleOnChange = (name, value) => {
    setfields({ [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields.email, null, null);
    setdetails(errs);
    console.log(errs);
    if (errs) return;

    try {
      setloading(true);
      await sendPasswordReset(fields.email);
      setdetails({ email: "check your emails or spams" });
    } catch (error) {
      setdetails({ email: error.message });
    }
    setloading(false);
  };

  return (
    <div className={styles.signup}>
      <p>
        Type your email address so as we can send link through it and you can
        reset your password
      </p>
      {loading && <Loader />}
      {details && <Errors errors={details} />}
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <Input
          value={fields.email}
          name="email"
          type="email"
          placeholder="Email"
          icon={<EmailOutlined className={styles.icon} />}
          onchange={handleOnChange}
        />
        <Button text="Send" />
        <p
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate(-1)}
        >
          GO Back
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
