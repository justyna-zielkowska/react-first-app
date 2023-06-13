import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { getFilmsList } from '../filmsData';


const Filmpage = () => {
  const { filmId } = useParams();
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate('/FilmsLibrary')
  }

  const film = getFilmsList().find(film => film.Id === filmId)

  return (
    <div>
      <h2>{film?.Title}</h2>
      <p>{film?.Year}</p>
      <p>{film?.Actors}</p>
      <p>{film?.Director}</p>
      <p>{film?.Released}</p>
      <p>{film?.Genre}</p>
      <p>{film?.Production}</p>
      <p>{film?.Country}</p>
      <p>{film?.Runtime}</p>
      <p>{film?.Writer}</p>


      <hr/>
      <button onClick={changeRoute}>Back to Film Library</button>
    </div>
  );
}

export default Filmpage; 