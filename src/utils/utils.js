export const validate = (email = "", username = "", password = "") => {
  const errs = {};
  if (email !== null && email.trim() === "")
    errs.email = "Invalid email, Please enter email as name@email.com.";
  if (username !== null && username.trim() === "")
    errs.username = "Full name is required.";
  if (password !== null && password.length < 8)
    errs.password = "Password must be more than 8 characters.";
  return Object.keys(errs).length === 0 ? null : errs;
};
