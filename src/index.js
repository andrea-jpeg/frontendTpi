import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //{}=variabile
import "./styles.css";
import Registration from "./pages/Registration.js";
import AddPrenotazione from './pages/AddPrenotazione.js';
import Evento from './pages/EventoPage.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path ="/registrazione" exact component={Registration}/>
        <Route path = '/addPrenotazione' exact component={AddPrenotazione}/>
        <Route path ='/evento' exact component={Evento}/>
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
