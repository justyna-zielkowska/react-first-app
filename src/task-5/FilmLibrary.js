import React from 'react';
import FilmList from './FilmList';
import { getFilmsList } from "../filmsData";

const FilmLibrary = () => {
  const filmsData = getFilmsList();

  const  filmBefore2000 = filmsData.filter(film => film.Year <= 2000)
  const  filmAfter2000 = filmsData.filter(film => film.Year > 2000)

  return (
    <div>
     <h1>Film Library App</h1>
     <div style={{display: "flex", justifyContent: "space-between"}}>
     <FilmList films={filmBefore2000} title={"Films before 2000"}/>
     <FilmList films={filmAfter2000} title={"Films after 2000"}/>
     </div>
    </div>
  )
}

export default FilmLibrary;