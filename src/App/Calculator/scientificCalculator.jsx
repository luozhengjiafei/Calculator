import React, { useState } from "react";
import "./styles.css";
import Button from "../Button/button.jsx";
import factorial from "./Function/factorial";
import comma from "./Function/Comma";

function Scientific() {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [opprator, setOpprator] = useState(null);

    const handler = (content) => () => {
        const number = parseFloat(value);
        switch (content) {
            case ("CE"):
                setMemory(memory);
                setValue('0');
                setOpprator(opprator);
                return;
            case ("÷"):
                if (opprator !== null) {
                    if (opprator === "+")
                        setMemory((memory + parseFloat(number)));
                    else if (opprator === "-")
                        setMemory((memory - parseFloat(number)));
                    else if (opprator === "x")
                        setMemory((memory * parseFloat(number)));
                    else if (opprator === "÷")
                        setMemory((memory / parseFloat(number)));
                } else {
                    setMemory(parseFloat(value));
                }
                setOpprator("÷");
                setValue('0');
                return;
            case ("-"):
                if (opprator !== null) {
                    if (opprator === "+")
                        setMemory((memory + parseFloat(number)));
                    else if (opprator === "-")
                        setMemory((memory - parseFloat(number)));
                    else if (opprator === "x")
                        setMemory((memory * parseFloat(number)));
                    else if (opprator === "÷")
                        setMemory((memory / parseFloat(number)));
                } else {
                    setMemory(parseFloat(value));
                }
                setOpprator("-");
                setValue('0');
                return;
            case ("x"):
                if (opprator !== null) {
                    if (opprator === "+")
                        setMemory((memory + parseFloat(number)));
                    else if (opprator === "-")
                        setMemory((memory - parseFloat(number)));
                    else if (opprator === "x")
                        setMemory((memory * parseFloat(number)));
                    else if (opprator === "÷")
                        setMemory((memory / parseFloat(number)));
                } else {
                    setMemory(parseFloat(value));
                }
                setOpprator("x");
                setValue('0');
                return;
            case ("+"):
                if (opprator !== null) {
                    if (opprator === "+")
                        setMemory((memory + parseFloat(number)));
                    else if (opprator === "-")
                        setMemory((memory - parseFloat(number)));
                    else if (opprator === "x")
                        setMemory((memory * parseFloat(number)));
                    else if (opprator === "÷")
                        setMemory((memory / parseFloat(number)));
                } else {
                    setMemory(parseFloat(value));
                }
                setOpprator("+");
                setValue('0');
                return;
            case ("±"):
                setValue((number * -1).toString());
                return;
            case ("="):
                if (!opprator) return;
                if (opprator === "+")
                    setValue((memory + parseFloat(number)).toString());
                else if (opprator === "-")
                    setValue((memory - parseFloat(number)).toString());
                else if (opprator === "x")
                    setValue((memory * parseFloat(number)).toString());
                else if (opprator === "÷")
                    setValue((memory / parseFloat(number)).toString());
                else if (opprator === "%")
                    setValue((memory % parseFloat(number)).toString());
                else if (opprator === "exp")
                    setValue(memory * (Math.pow(10, parseFloat(number))).toString());
                else if (opprator === "^")
                    setValue(Math.pow(memory, parseFloat(number)).toString());
                setMemory(null);
                setOpprator(null);
                return;
            case ("%"):
                setValue((number / 100).toString());
                setMemory(null);
                return;
            case ("C"):
                setValue('0');
                setMemory(null);
                setOpprator(null);
                return;
            case ("x²"):
                setValue((number * number).toString());
                return;
            case ("1/x"):
                setValue((1 / number).toString());
                return;
            case ("√x"):
                setValue(Math.sqrt(number).toString());
                return;
            case ("<=="):
                setValue(parseInt(number / 10).toString());
                return;
            case ("."):
                if (value.includes(".")) return;
                setValue(value + '.');
                return;
            case ("π"):
                setValue(Math.PI.toString());
                return;
            case ("e"):
                setValue(Math.E.toString());
                return;
            case ("e^x"):
                setValue(Math.pow(Math.E,number).toString());
                return;
            case ("|x|"):
                if(number < 0){
                    setValue((number * -1).toString());
                }
                return;
            case ("mod"):
                setMemory(number);
                setValue("0");
                setOpprator("%");
                return;
            case ("exp"):
                setMemory(number);
                setValue("0");
                setOpprator("exp");
                return;
            case ("n!"):
                setValue(factorial(number).toString());
                return;
            case ("x^y"):
                setMemory(number);
                setValue("0");
                setOpprator("^");
                return;  
            case ("10x"):
                setValue(Math.pow(10,number).toString());
                return;
            case ("log"):
                if(number > 0)
                setValue(Math.log10(number).toString());
                return;
            case ("ln"):
                if (number > 0) 
                setValue(Math.log(number).toString());
                return;      
            default:
                if (value[value.length - 1] === ".") {
                    setValue(value + content);
                } else {
                    setValue((parseFloat(number + content)).toString());
                }
                return;
        }
    }
    return (
        <div>
            <div className="number">{comma(value)}</div>
            <div className="standard">
                <Button onButtonClick={handler} content="x²" type="function" />
                <Button onButtonClick={handler} content="π" type="function" />
                <Button onButtonClick={handler} content="e" type="function" />
                <Button onButtonClick={handler} content="CE" type="function" />
                <Button onButtonClick={handler} content="C" type="function" />
                <Button onButtonClick={handler} content="<==" type="function" />
                <Button onButtonClick={handler} content="1/x" type="function" />
                <Button onButtonClick={handler} content="|x|" type="function" />
                <Button onButtonClick={handler} content="exp" type="function" />
                <Button onButtonClick={handler} content="mod" type="function" />
                <Button onButtonClick={handler} content="√x" type="function" />
                <Button onButtonClick={handler} content="n!" type="function" />
                <Button onButtonClick={handler} content="x^y" type="function" />
                <Button onButtonClick={handler} content="10x²" type="function" />
                <Button onButtonClick={handler} content="e^x" type="function" />
                <Button onButtonClick={handler} content="÷" type="operator" />
                <Button onButtonClick={handler} content="7" />
                <Button onButtonClick={handler} content="8" />
                <Button onButtonClick={handler} content="9" />
                <Button onButtonClick={handler} content="x" type="operator" />
                <Button onButtonClick={handler} content="4" />
                <Button onButtonClick={handler} content="5" />
                <Button onButtonClick={handler} content="6" />
                <Button onButtonClick={handler} content="-" type="operator" />
                <Button onButtonClick={handler} content="1" />
                <Button onButtonClick={handler} content="2" />
                <Button onButtonClick={handler} content="3" />
                <Button onButtonClick={handler} content="+" type="operator" />
                <Button onButtonClick={handler} content="±" />
                <Button onButtonClick={handler} content="0" />
                <Button onButtonClick={handler} content="." />
                <Button onButtonClick={handler} content="=" type="operator" />
                <Button onButtonClick={handler} content="ln" />
                <Button onButtonClick={handler} content="log" />
            </div>
        </div>
    );
}
export default Scientific;
