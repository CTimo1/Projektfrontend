import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("som tu", event.target.checked);
    if (event.target.checked === true) {
      console.log("ano");
      fetch("http://192.168.50.228:3333/zapni");
    } else {
      console.log("nie");
      fetch("http://192.168.50.228:3333/vypni");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Switch {...label} defaultChecked onChange={changeHandler} />
      </header>
    </div>
  );
}

export default App;
