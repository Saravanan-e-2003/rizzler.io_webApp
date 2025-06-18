import React,{ useState } from 'react';

export default function CategoryDropDown({ setSelectedCategory }){
    const[selected,setSelected] = useState("");
    function handleChange(e){
        const value = e.target.value;
        setSelected(value);
        setSelectedCategory(value);
    }

    return(
        <div className='Drop-downDiv'>
            <label htmlFor="options" className="dropdown-label">Choose Category:</label>
            <select id='options' value={selected} onChange={handleChange} className="dropdown-select">
                <option value="">Random 🔀</option>
                <option value="Romantic">Romantic 😍</option>
                <option value="Funny">funny 😂</option>
                <option value="Cheesy">cheesy 🧀</option>
                <option value="Flirty">flirty 😉</option>
                <option value="Clever">clever 🤓</option>
                <option value="Complimentary">Complimentary 🍭</option>
            </select>
        </div>
    )
}