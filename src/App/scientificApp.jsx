import React from "react";
import "./styles.css";
import Footer from "./footer";
import Header from "./header";
import Scientific from "./Calculator/scientificCalculator";

function standardApp() {

    return (
        <div className="App">
            <Header />
            <div className="top"></div>
            <Scientific />
            <Footer />
        </div>
    );
}
export default standardApp;
