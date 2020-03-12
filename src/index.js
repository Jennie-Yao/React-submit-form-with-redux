import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";

import SignInForm from "./SignInForm";
import Button from "./Button.js";

import reducer from "./reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Sign In To Your Account</h1>
        <SignInForm />
        <Button />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);