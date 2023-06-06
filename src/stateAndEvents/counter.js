import React from "react";
import { useState } from "react";

// prosty przyklad z uzyciem useState


const Counter  = () => {
    const [counterValue, setCounterValue] = useState(0);
  
    const handleClicker = () => {
      setCounterValue(counterValue + 1)
    }
  
    return (
      <div>
        <button onClick={handleClicker}>Click</button>
        <h2>{counterValue}</h2>
        
      </div>
    )
  }
  
  export default Counter;
  
  