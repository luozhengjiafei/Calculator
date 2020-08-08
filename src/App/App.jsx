import React from "react";
import "./styles.css";
import Footer from "./footer";
import Header from "./header"
import Standard from "./standardCalculator"

function App() {
  
    return (
        <div className="App">
        <Header/>
            <div className="top"></div>
            <Standard/>
            <Footer/>
        </div>
    );
}
export default App;
