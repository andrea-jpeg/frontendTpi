import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //{}=variabile
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
