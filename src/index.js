import React from "react";
import ReactDOM from "react-dom";
import StandardApp from "./App/standardApp";
import CurreycyApp from "./App/currencyApp";
import ScientificApp from "./App/scientificApp";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <div class="flexbox-container">
        <div className="col"><StandardApp /></div>
        <div className="col"><CurreycyApp /></div>
        <div className="col"><ScientificApp /></div>
    </div>
    , 
    rootElement);
