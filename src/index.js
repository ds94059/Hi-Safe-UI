import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//call dll function
//console.log("EApiLibInitialize", window.Dll.EApiLibInitialize());

const path32 = "/public/dll/32bit/aaeonEAPI.dll";
const path64 = "/public/dll/64bit/aaeonEAPI.dll";

const config = {
  EApiLibInitialize: ["UInt32", []]
};

try {
  const funcs = window.RegistDll(path32, config);
  console.log("32bit : ", funcs.EApiLibInitialize());
} catch (e) {
  console.log("now is using 64bit nodejs");
}

try {
    const funcs = window.RegistDll(path64, config);
    console.log("64bit : ", funcs.EApiLibInitialize());
  } catch (e) {
    console.log("now is using 32bit nodejs");
  }
