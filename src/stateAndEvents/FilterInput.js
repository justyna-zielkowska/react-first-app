import React, { useState } from 'react';

const FilterInput = ({onFilterSave, label}) => {
    const [filter, setFilter] = useState('')
    return(
      <div style={{marginBottom: 10}}>
        <label>{label}</label>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} style={{display: 'block'}}/>
        <button type="submit" onClick={() => onFilterSave(filter)}>
          Filter
        </button>
      </div>
    )
  }

    export default FilterInput;
  