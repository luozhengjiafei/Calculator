import React from "react";

function fetchDate() {
return new Promise((resolve, reject) => {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(response => resolve(response.json()))
    .catch(error => {
        console.error(error);
        reject(error);
    });
})
}

let getDate = async() =>{
    let res = await fetchDate();
    return res;
}

export default getDate;