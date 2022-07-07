import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useContext } from "react";
import { createContext } from "react";
import { auth, app } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getFirestore,
} from "firebase/firestore";

// various functions to achieve Auth
function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  const db = getFirestore(app);
  const res = await signInWithPopup(auth, googleProvider);
  const user = res.user;
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    return addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
    });
  }
};
const sendPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// start ti write our context
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{ signUp, logIn, sendPasswordReset, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
