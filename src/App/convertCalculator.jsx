import React, { useState,useEffect } from "react";
import "./styles.css";
import Button from "../Button/button.jsx"
import CurrencyRow from "./CurrencyRow"

const base_Url = 'https://api.exchangeratesapi.io/latest';

function App() {
    const [amount, setAmount] = useState(0);
    const [currencyOptions, setCurrency] = useState([]);
    const [inputCurrency, setInputCurrency] = useState();
    const [outputCurrency, setOnputCurrency] = useState();
    const [exchangeRate,setExchangRate] = useState();
    console.log(exchangeRate);

    useEffect(() => {
       fetch(base_Url)
        .then(res => res.json())
        .then(data =>{
            const firstcurrency = Object.keys(data.rates)[0];
            setCurrency([data.base, ...Object.keys(data.rates)])
            setInputCurrency(data.base);
            setOnputCurrency(firstcurrency);
            setExchangRate(data.rates[firstcurrency]);
        })
    },[])

    useEffect(() =>{
        if (inputCurrency != null && outputCurrency!= null )
            fetch(`${base_Url}?base=${inputCurrency}&symbols=${outputCurrency}`)
        .then(res => res.json())
            .then(data => setExchangRate(data.rates[outputCurrency]))
    }, [inputCurrency, outputCurrency])

    const handler = (content) => () => {
        const number  = amount;
        switch (content) {
            case ("CE"):
                setAmount(0);
                return;
            case ("<=="):
                setAmount(number/10);
                return;
            case ("."):   
                if (number.toString().includes(".")) return;
                setAmount(parseFloat(number.toString() + '.'));
                return;
            default:
                setAmount(parseFloat(number.toString() + content));
                return;
        }
    }
    return (
        <div>
            <div className="top"></div>
            <div className="inputValue">{amount}</div>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={inputCurrency}
                onChangeCurrency={e => setInputCurrency(e.target.value)}
            />
            <div className="equals">=</div>
            <div className="outputValue">{amount * exchangeRate}</div>
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={outputCurrency}
                onChangeCurrency={e => setOnputCurrency(e.target.value)}
            /> 
            <div className="convert">
                <Button onButtonClick={handler} content="CE" type="function" />
                <Button onButtonClick={handler} content="<==" type="function" />
                <Button onButtonClick={handler} content="9" />
                <Button onButtonClick={handler} content="8" />
                <Button onButtonClick={handler} content="7" />
                <Button onButtonClick={handler} content="6" />
                <Button onButtonClick={handler} content="5" />
                <Button onButtonClick={handler} content="4" />
                <Button onButtonClick={handler} content="3" />
                <Button onButtonClick={handler} content="2" />
                <Button onButtonClick={handler} content="1" />
                <Button onButtonClick={handler} content="." />
            </div>
        </div>
    );
}
export default App;
