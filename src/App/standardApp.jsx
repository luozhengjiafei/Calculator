import React from "react";
import "./styles.css";
import Footer from "./footer";
import Header from "./header";
import Standard from "./Calculator/standardCalculator";

function standardApp() {

    return (
        <div className="App">
        <Header/>
            <div className="top"></div>
            <Standard />
            <Footer/>
        </div>
    );
}
export default standardApp;
