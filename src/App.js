import logo from "./logo.svg";
import axios, { AxiosResponse } from "axios";
import "./App.css";
import { useEffect } from "react";
function App() {
  let data;
  useEffect(() => {
    axios.get("https://localhost:7197/City").then((response) => {
      console.log("Aaa", response);
    });
  }, []);

  return <></>;
}

export default App;
