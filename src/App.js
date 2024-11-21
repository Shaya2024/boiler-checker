import { useState } from 'react';
import './App.css';
import TemperatureInputC from './TemperatureInputC';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInputF from './TemperatureInputF.js';

function App() {
  const [temp, setTemp]=useState(0);
  function changeTemp(data){
    setTemp(data)
  }

  function changeTempF(data){
    setTemp((data-32)*0.55555)
  }

  return (
    <div>
     <TemperatureInputC functionToCall={changeTemp}/>
     <TemperatureInputF functionToCall={changeTempF}/>

     <BoilingVerdict text={temp > 100? "Water would boil" :
       "Water would not boil"} />
    </div>
  );
}

export default App;
