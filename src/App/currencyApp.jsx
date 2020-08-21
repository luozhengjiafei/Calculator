import React from "react";
import "./styles.css";
import Header from "./header";
import Currency from "./Calculator/currencyCalculator";

function currencyApp() {

    return (
        <div className="App">
            <Header content="currency"/>
            <div className="top"></div>
            <Currency />
        </div>
    );
}
export default currencyApp;
