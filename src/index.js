import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import { DataProvider } from "./components/Context/Context";

// firebase.initializeApp({
//   apiKey: "AIzaSyCTKVbvJjSLkY77aG1GIYMkMh9YxBoI_Lc",
//   authDomain: "chat-react-20f2c.firebaseapp.com",
//   projectId: "chat-react-20f2c",
//   storageBucket: "chat-react-20f2c.appspot.com",
//   messagingSenderId: "299921757296",
//   appId: "1:299921757296:web:01e71ef2795fb196acd0b5",
//   measurementId: "G-Z3ERCR0BP0",
// });

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
