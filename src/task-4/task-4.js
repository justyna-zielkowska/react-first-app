import React from 'react';
import { getFilmsList } from "../filmsData";
import styles from "./task4.module.css"

const DescriptionField = (props) => {
    return (
        <>
        <p> 
            <span className={styles.boldText}>{props.name}</span>{props.value}
        </p>
        </>
    )
  }
  

const Task4 = () => {
  const filmsData = getFilmsList();
 
  return (
    <div>
      {filmsData.map(film => 
      
      <div className={styles.container} style={{textAlign: "left", marginLeft: "20px"}}>
        <img alt="poster" src={film.Poster}/>
        <div>
            <h2>{film.Title}<span style={{fontSize: 14, marginLeft: 4, fontStyle: "normal"}}>{film.Year} </span></h2>
            
        <DescriptionField name="Genre: " value={film.Genre}/>
        <DescriptionField name="Director: " value={film.Director}/>
        <DescriptionField name="Actors: " value={film.Actors}/>
 
        </div>
        <br></br>
      </div>)}

    </div>
  )
}

export default Task4;