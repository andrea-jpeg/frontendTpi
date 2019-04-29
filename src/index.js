import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage.js";

import "./styles.css";

function App() {
  return <MainPage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
