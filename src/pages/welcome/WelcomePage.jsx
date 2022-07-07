import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Loader } from "../../components";
import { auth } from "../../firebase/firebase";

const WelcomePage = () => {
  const [error, seterror] = useState();
  const [user, setuser] = useState();
  let navigate = useNavigate();
  console.log(auth.currentUser);
  auth.onAuthStateChanged(function (user) {
    if (!user) navigate("/login", { replace: true });
    else {
      setuser(user);
    }
  });
  let signOut = async () => {
    try {
      await auth.signOut();
      console.log(auth.currentUser);

      navigate("/login", { replace: true });
    } catch (error) {
      seterror(error.message);
    }
  };
  if (!user) return <Loader />;
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "50%",
        textAlign: "center",
      }}
    >
      <h1>Welcome {user?.email}</h1>
      <Button text="Sign out" onClick={signOut} />
      {error && <h3> {error}</h3>}
    </div>
  );
};

export default WelcomePage;
