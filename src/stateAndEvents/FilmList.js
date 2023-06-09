import React, {useState} from 'react';
import styles from "./FilmList.module.css"
import FilmItem from './FilmItem';

// wyodrębniony drugi komponent z samym przechowywaniem stanu inputa, 
// zeby ograniczyc liczbę przerenderowan strony podczas wpisywania kazdej literki




const FilmList = ({films, title}) => { 
 
    
    return (
        <div>

        <h2>{title}</h2>
     
        
            <div className={styles.filmsList}>
            {films.map((film) => (
            <FilmItem key={film.Title} film={film}/>
            ))}
        </div>
        </div>
    )
    }

export default FilmList;