import React from "react";

import "./style.css";

const Button = ({content,onButtonClick,type}) => {
    return(
        <div className={`myButton ${type || " "}`} onClick = {onButtonClick(content)}>{content}</div>
    ) 
}

export default Button;