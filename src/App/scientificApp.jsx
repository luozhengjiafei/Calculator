import React from "react";
import "./styles.css";
import Header from "./header";
import Scientific from "./Calculator/scientificCalculator";

function standardApp() {

    return (
        <div className="App">
            <Header content="scientific"/>
            <div className="top"></div>
            <Scientific />
        </div>
    );
}
export default standardApp;
