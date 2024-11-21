import {useState} from 'react';

function TemperatureInputF(props) {
    const [inputValue, setInputValue]=useState("");
    function handleInputChange(event){
        setInputValue(event.target.value);
        props.functionToCall(event.target.value);
    }

    return(
        <label>Fahrenheit<input value={inputValue} onChange={handleInputChange} 
        type="number"></input></label>
    )
}

export default TemperatureInputF

