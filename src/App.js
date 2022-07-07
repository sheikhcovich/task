import React, { Suspense } from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.js";
import { Route, Routes } from "react-router";
import { Loader, Social } from "./components/index.js";
const Register = React.lazy(() => import("./pages/register/Register.jsx"));
const SignIn = React.lazy(() => import("./pages/register/signin/SignIn.jsx"));
const SignUp = React.lazy(() => import("./pages/register/signup/SignUp.jsx"));
const ForgotPassword = React.lazy(() =>
  import("./pages/register/forgotPassword/ForgotPassword.jsx")
);
const WelcomePage = React.lazy(() => import("./pages/welcome/WelcomePage.jsx"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route
                path="/login"
                element={
                  <Register>
                    <SignIn>
                      <Social />
                    </SignIn>
                  </Register>
                }
              />
              <Route
                path="/signup"
                element={
                  <Register>
                    <SignUp>
                      <Social />
                    </SignUp>
                  </Register>
                }
              />
              <Route
                path="/forgot_password"
                element={
                  <Register>
                    <ForgotPassword />
                  </Register>
                }
              />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
