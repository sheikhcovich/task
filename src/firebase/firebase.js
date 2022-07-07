import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzRv_vAsVQniiQZ2jkWRXHnvLm2WRrSQY",
  authDomain: "auth-demo-6575c.firebaseapp.com",
  projectId: "auth-demo-6575c",
  storageBucket: "auth-demo-6575c.appspot.com",
  messagingSenderId: "371038961747",
  appId: "1:371038961747:web:65a336acf0a5db5d5b46a6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
