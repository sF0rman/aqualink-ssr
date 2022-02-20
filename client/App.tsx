import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shell from "./Shell";

ReactDOM.hydrate(
  <BrowserRouter>
    <Shell />
  </BrowserRouter>,
  document.getElementById("root")
);
