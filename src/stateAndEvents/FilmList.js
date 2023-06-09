import React, {useState} from 'react';
import styles from "./FilmList.module.css"
import FilmItem from './FilmItem';

// wyodrębniony drugi komponent z samym przechowywaniem stanu inputa, 
// zeby ograniczyc liczbę przerenderowan strony podczas wpisywania kazdej literki

const FilterInput = ({onFilterSave}) => {

    const [filter, setFilter] = useState("");

        return(

        <div>
            <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type="submit" onClick={() => onFilterSave(filter)}>Filter</button>
        </div>

        )
    };



const FilmList = ({films, title}) => { 
 
    const [filteredList, setFilteredList] = useState(films);

    // zmienione na filter po kliknieciu na button

    const submitFilter = (filterValue) => {
        setFilteredList(films.filter(film => film.Title.toLowerCase().includes(filterValue.toLowerCase())))
    }

    return (
        <div>

        
        <h2>{title}</h2>
        <label>Filter list:</label>
        <FilterInput onFilterSave={submitFilter}/>
        
            <div className={styles.filmsList}>
            {filteredList.map((film) => (
            <FilmItem key={film.Title} film={film}/>
            ))}
        </div>
        </div>
    )
    }

export default FilmList;