import React, { useState } from 'react';
import FilmList from './FilmList';
import { getFilmsList } from "../filmsData";

const FilterInput = ({onFilterSave}) => {

  const [filter, setFilter] = useState("");

      return(

      <div>
          <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
          <button type="submit" onClick={() => onFilterSave(filter)}>Filter</button>
      </div>

      )
  };

const filmsData = getFilmsList();

const FilmLibrary = () => {

  const [sortAscending, setSortAscending] = useState(true);
  const [filteredList, setFilteredList] = useState(filmsData);

    const submitFilter = (filterValue) => {
        setFilteredList(filmsData.filter(film => film.Title.toLowerCase().includes(filterValue.toLowerCase())))
    }


  const sortedData = [...filteredList].sort((film, nextFilm) => sortAscending ? (film.Year - nextFilm.Year) : (nextFilm.Year - film.Year))


  return (
    <div>
     <h1>Film Library App</h1>
     <FilterInput onFilterSave={submitFilter}/>
     <p>Sort:</p>
     <button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "Ascending" : "Descending"}</button>
     <div>
     <FilmList title={"Film list:"} films={sortedData}/>

     </div>
    </div>
  )
}

export default FilmLibrary;

