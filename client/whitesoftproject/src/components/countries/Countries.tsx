import React from "react";
import countryList from "react-select-country-list";

export default function App() {
    return (
        <div>
            <select onChange ={(e) => console.log(e.target.value)} name='' id=''>
                {countryList()
                .getData()
                .map((country) => (
                    <option key={country.label}>{country.label}</option>
                ))}
            </select>
        </div>
    )
}