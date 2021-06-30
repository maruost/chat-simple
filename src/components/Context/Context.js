import React, { createContext, useContext } from "react";
import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCTKVbvJjSLkY77aG1GIYMkMh9YxBoI_Lc",
  authDomain: "chat-react-20f2c.firebaseapp.com",
  projectId: "chat-react-20f2c",
  storageBucket: "chat-react-20f2c.appspot.com",
  messagingSenderId: "299921757296",
  appId: "1:299921757296:web:01e71ef2795fb196acd0b5",
  measurementId: "G-Z3ERCR0BP0",
});

const Context = createContext();
const firestore = firebase.firestore();

export const DataProvider = ({ children }) => {
  return (
    <Context.Provider value={{ firebase, firestore }}>
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
