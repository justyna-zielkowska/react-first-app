import React, { useState } from 'react';


//1. pobiera funcję onFilterSave
//2. wyswietla input
//3. wyswietla przycisk który po kliknięciu wywyoluje filterSave przekazując jej wartosc inputa

const FilterInput = ({onFilterSave}) => {

    const [filter, setFilter] = useState("");
  
        return(
        <div>
            <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type="submit" onClick={() => onFilterSave(filter)}>Filter</button>
        </div>
        )
    };

    export default FilterInput
  