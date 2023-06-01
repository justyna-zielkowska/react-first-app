import React from 'react';
import { getFilmsList } from "../filmsData";

const Task2 = () => {
  const filmsData = getFilmsList();
  
  return (
    <div>
      {filmsData.map(film => 
      
      <div style={{textAlign: "left", marginLeft: "20px"}}>
        <h2>Title: {film.Title}</h2>
        <p>Year:{film.Year}</p>
        <p>Genre: {film.Genre}</p>
        <p>Director: {film.Director}</p>
        <p>Actors: {film.Actors}</p>
        <br></br>
      </div>)}





    </div>
    
  )
 
}


export default Task2;