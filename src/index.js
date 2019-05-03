import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage.js";
import PrenotazioniPage from "./pages/PrenotazioniPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //{}=variabile
import "./styles.css";
import Registration from "./pages/Registration.js";
import AddPrenotazione from './pages/AddPrenotazione.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route  path="/prenotazioni" exact component={PrenotazioniPage}/>
        <Route path ="/registrazione" exact component={Registration}/>
        <Route path = '/addPrentazione' exact component={AddPrenotazione}/>
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
