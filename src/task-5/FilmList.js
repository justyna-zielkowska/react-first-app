import React from 'react';
import styles from "./task5.module.css"

const DescriptionField = (props) => {
    return (
        <>
        <p> 
            <span className={styles.boldText}>{props.name}</span>{props.value}
        </p>
        {props.hideline ? null : <hr/>}
        </>
    )
  }
  

const FilmList = ({films, title}) => {
 
  return (
    <div>

      <h2>{title}</h2>
      {films.map(film => 
      
      <div className={styles.container} style={{textAlign: "left", marginLeft: "20px"}}>
        <img alt="poster" src={film.Poster}/>
        <div>
            <h2>{film.Title}<span style={{fontSize: 14, marginLeft: 4, fontStyle: "normal"}}>{film.Year} </span></h2>
            
        <DescriptionField name="Genre: " value={film.Genre}/>
        <DescriptionField name="Director: " value={film.Director}/>
        <DescriptionField name="Actors: " value={film.Actors} hideline/>
 
        </div>
        <br></br>
      </div>)}

    </div>
  )
}

export default FilmList;