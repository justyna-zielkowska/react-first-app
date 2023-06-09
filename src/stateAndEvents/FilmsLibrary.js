import React, { useState } from 'react';
import FilmList from './FilmList';
import { getFilmsList } from "../filmsData";
import FilterInput from './FilterInput';


const filmsData = getFilmsList();

const FilmLibrary = () => {

  const [sortAscending, setSortAscending] = useState(true);
  const [filteredList, setFilteredList] = useState(filmsData);

    const submitTitleFilter = (filterValue) => {
        setFilteredList(filmsData.filter(film => film.Title.toLowerCase().includes(filterValue.toLowerCase())))
    }

    const submitYearFilter = (filterValue) => {
      setFilteredList(filmsData.filter(film => film.Year.toLowerCase().includes(filterValue.toLowerCase())))
  }


  const sortedData = [...filteredList].sort((film, nextFilm) => sortAscending ? (film.Year - nextFilm.Year) : (nextFilm.Year - film.Year))


  return (
    <div>
     <h1>Film Library App</h1>
     <FilterInput onFilterSave={submitTitleFilter}/>
     <FilterInput onFilterSave={submitYearFilter}/>
     <p>Sort:</p>
     <button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "Ascending" : "Descending"}</button>
     <div>
     <FilmList title={"Film list:"} films={sortedData}/>

     </div>
    </div>
  )
}

export default FilmLibrary;

