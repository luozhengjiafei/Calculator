import React from "react";
import ReactDOM from "react-dom";
import StandardApp from "./App/standardApp";
import CurreycyApp from "./App/currencyApp";
import ScientificApp from "./App/scientificApp";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <div class="flexbox-container">
        <div className="Scientific"><ScientificApp /></div>
    </div>
    , 
    rootElement);
