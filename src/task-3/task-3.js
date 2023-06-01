import React from 'react';
import { getFilmsList } from "../filmsData";
import styles from "./task-3.module.css"

const Task3 = () => {
  const filmsData = getFilmsList();
 console.log("dziala")
  
  return (
    <div>
      {filmsData.map(film => 
      
      <div className={styles.container} style={{textAlign: "left", marginLeft: "20px"}}>
        <img alt="poster" src={film.Poster}/>
        <div>
        <h2>Title: {film.Title}</h2>
        <p>Year:{film.Year}</p>
        <p>Genre: {film.Genre}</p>
        <p>Director: {film.Director}</p>
        <p>Actors: {film.Actors}</p>
        </div>
        <br></br>
      </div>)}

    </div>
  )
}

export default Task3;