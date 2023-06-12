import React from 'react';
import FilmItem from "./FilmItem";
import styles from './FilmList.module.css';

const FilmsList = ({films, title}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={styles.filmsList}>
        {films.map((film) => (
          <FilmItem key={film.Title} film={film}/>
        ))}
      </div>

      <button onClick={() => window.scrollTo(0,0)}>Scroll to top</button>
    </>
  )
}
export default FilmsList;