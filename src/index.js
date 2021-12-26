import React, { createContext} from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import "./styles.css";
import {UserProvider} from 'UserContext';

// import firebase from "./firebase";

// console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

