import React from 'react';
import { useState } from 'react';

import './App.css';
import Task1 from './task-1/task-1';
import Task2 from './task-2/task-2';
import Task3 from './task-3/task-3';
import Task4 from './task-4/task-4';
import Task5 from './task-5/FilmLibrary';

// prostu przyklad z uzyciem useState


const StateExample  = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClicker = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <button onClick={handleClicker}>Click</button>
      {isVisible ? <h2>Hello!</h2> : null}
      
    </div>
  )

}

export default StateExample;


const App = () => {
  return (
    <div className="App">

    <StateExample/>
    
    </div>
  );
}

