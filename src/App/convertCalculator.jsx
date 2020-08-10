import React, { useState } from "react";
import "./styles.css";
import Button from "../Button/button.jsx"

function App() {
    const [inputValue, setInput] = useState("0");
    const [outPutValue ,setOutput] =useState("0");
    const [dollorType, setType] = useState({
        inputType:"",
        outType:""
    });

    const url = "https://api.exchangeratesapi.io/latest HTTP/1.1";
    const response = fetch(url);
    const data = response.json();

    const handleInput = (value) => () =>{
        setType(value, dollorType.outType);
    }

    const handleOutput= (value) => () => {
        setType(dollorType.outType, value);
    }

    const handler = (content) => () => {
        const number = parseFloat(inputValue);
        switch (content) {
            case ("CE"):
                setInput('0');
                setOutput('0');
                return;
            case ("<=="):
                setInput(parseInt(number / 10).toString());
                setOutput(parseFloat((inputValue * data.rates.dollorType.inputType) / data.rates.dollorType.outType));
                return;
            case ("."):   
                if (inputValue.includes(".")) return;
                setInput(inputValue + '.');
                return;
            default:
                if (inputValue[inputValue.length - 1] === ".") {
                    setInput(inputValue + content);
                } else {
                    setInput((parseFloat(number + content)).toString());
                }
                setOutput(parseFloat((inputValue * data.rates.dollorType.inputType) / data.rates.dollorType.outType));
                return;
        }
    }
    return (
        <div className="App">
            <div className="top"></div>
            <div className="inputValue">{inputValue}</div>
            <div class="custom-select">
                <select onchange={handleInput}>
                    <option value="CAD">Canadian dollar</option>
                    <option value="HKD">Hong Kong dollar</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="PHP">Philippine peso</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="HUF">Hungarian Forint </option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="THB">Thai Baht</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="PLN">Poland złoty</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="TRY">Turkish lira</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="USD">United States Dollar</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="ILS">Israeli New Shekel</option>
                    <option value="GBP">Pound sterling</option>
                    <option value="KRW">South Korean won</option>
                    <option value="MYR">Malaysian Ringgit</option>
                </select>
            </div>
            <div className="outputValue">{outPutValue}</div> 
            <div class="custom-select">
                <select onchange={handleOutput}>
                    <option value="CAD">Canadian dollar</option>
                    <option value="HKD">Hong Kong dollar</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="PHP">Philippine peso</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="HUF">Hungarian Forint </option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="THB">Thai Baht</option>
                    <option value="CHF">Swiss Franc</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="PLN">Poland złoty</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="TRY">Turkish lira</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="USD">United States Dollar</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="ILS">Israeli New Shekel</option>
                    <option value="GBP">Pound sterling</option>
                    <option value="KRW">South Korean won</option>
                    <option value="MYR">Malaysian Ringgit</option>
                </select>
            </div>
            <div className="buttons">
                <Button onButtonClick={handler} content="CE" type="function" />
                <Button onButtonClick={handler} content="<==" type="function" />
                <Button onButtonClick={handler} content="7" />
                <Button onButtonClick={handler} content="8" />
                <Button onButtonClick={handler} content="9" />
                <Button onButtonClick={handler} content="4" />
                <Button onButtonClick={handler} content="5" />
                <Button onButtonClick={handler} content="6" />
                <Button onButtonClick={handler} content="1" />
                <Button onButtonClick={handler} content="2" />
                <Button onButtonClick={handler} content="3" />
                <Button onButtonClick={handler} content="." />
            </div>
        </div>
    );
}
export default App;
