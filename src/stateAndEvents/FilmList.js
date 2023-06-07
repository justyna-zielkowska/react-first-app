import React from 'react';
import styles from "./FilmList.module.css"
import FilmItem from './FilmItem';

// const DescriptionField = (props) => {
//     return (
//         <>
//         <p> 
//             <span className={styles.boldText}>{props.name}</span>{props.value}
//         </p>
//         {props.hideline ? null : <hr/>}
//         </>
//     )
//   }
  

const FilmList = ({films, title}) => {
 
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.filmsList}>
        {films.map((film) => (
          <FilmItem film={film}/>
        ))}
      </div>
    </div>
  )
}

export default FilmList;