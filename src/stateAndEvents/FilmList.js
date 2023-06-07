import React, {useState} from 'react';
import styles from "./FilmList.module.css"
import FilmItem from './FilmItem';



const FilmList = ({films, title}) => {
 
const [filter, setFilter] = useState("")

const filteredList = films.filter(film => film.Title.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>

     
      <h2>{title}</h2>
      <label>Filter list:</label>
      <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
      <p></p>
      <div className={styles.filmsList}>
        {filteredList.map((film) => (
          <FilmItem key={film.Title} film={film}/>
        ))}
      </div>
    </div>
  )
}

export default FilmList;