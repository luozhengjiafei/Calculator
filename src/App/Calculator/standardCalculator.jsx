import React, { useState } from "react";
import "./styles.css";
import Button from "../Button/button.jsx";
import comma from "./Function/Comma";

function Standard() {
    var textClass = "number";
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [opprator, setOpprator] = useState(null);


    const textChange = (value) => {
        if (value.length > 9){
            textClass = "smallNumber";
            console.log("active");
        }
        return;
    }
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
            <div className={textClass} onChange={textChange(value)}>{comma(value)}</div>
            <div className="standard">
                <Button onButtonClick={handler} content="%" type="function" />
                <Button onButtonClick={handler} content="CE" type="function" />
                <Button onButtonClick={handler} content="C" type="function" />
                <Button onButtonClick={handler} content="<==" type="function" />
                <Button onButtonClick={handler} content="1/x" type="function" />
                <Button onButtonClick={handler} content="x²" type="function" />
                <Button onButtonClick={handler} content="√x" type="function" />
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
            </div>
        </div>
    );
}
export default Standard;
