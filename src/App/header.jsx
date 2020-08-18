import React from "react";

function Header ({content}){
    if (content === "standard"){
    return <header>
        <h1>Standard Calculator</h1>
        </header>
    } else if (content === "scientific"){
        return <header>
            <h1>Scientific Calculator</h1>
        </header>
    }else if(content === "currency"){
        return <header>
            <h1>Currency Calculator</h1>
        </header>
    }
}

export default Header;