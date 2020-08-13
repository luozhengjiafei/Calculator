import React from 'react'

export default function CurrencyRow(props) {
    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency
    } = props
    return (
        <div>
            <label for="Currency" className ="convertTitle">Choose type of Currency: </label>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
             {currencyOptions.map(options =>(
                 <option key={options} value={options}>{options}</option>
             ))}
            </select>
        </div>
    )
}
