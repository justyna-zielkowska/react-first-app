import React, { useState } from 'react';
import FilmList from './FilmList';
import { getFilmsList } from "../filmsData";


const FilmLibrary = () => {
  const filmsData = getFilmsList();

  const [sortAscending, setSortAscending] = useState(true);

  filmsData.sort((film, nextFilm) => sortAscending ? (film.Year - nextFilm.Year) : (nextFilm.Year - film.Year))


  return (
    <div>
     <h1>Film Library App</h1>
     <p>Sort:</p>
     <button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "Ascending" : "Descending"}</button>
     <div style={{display: "flex", justifyContent: "space-between"}}>
     <FilmList title={"Film list:"} films={filmsData}/>
 
     </div>
    </div>
  )
}

export default FilmLibrary;

