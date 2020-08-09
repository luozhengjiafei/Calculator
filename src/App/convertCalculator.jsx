import React, { useState } from "react";
import "./styles.css";
import Button from "../Button/button.jsx"

function App() {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [opprator, setOpprator] = useState(null);
    const [table, setTable] = useState(null);

   function componentMount(){
       const url = "https://api.exchangeratesapi.io/latest HTTP/1.1";
       const response = fetch(url);
       const data = response.json();
       setTable({data});
   }
    const handler = (content) => () => {
        const number = parseFloat(value);
        switch (content) {
            case ("CE"):
                setMemory(memory);
                setValue('0');
                setOpprator(opprator);
                return;
            case ("<=="):
                setValue(parseInt(number / 10).toString());
                return;
            case ("."):   //Unfinished
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
        <div className="App">
            <div className="top"></div>
            <div className="inputValue">{value}</div>
            <div className="outputValue">{value}</div> 
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
