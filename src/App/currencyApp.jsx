import React from "react";
import "./styles.css";
import Footer from "./footer";
import Header from "./header";
import Currency from "./Calculator/currencyCalculator";

function currencyApp() {

    return (
        <div className="App">
            <Header content="currency"/>
            <div className="top"></div>
            <Currency />
            <Footer/>
        </div>
    );
}
export default currencyApp;
