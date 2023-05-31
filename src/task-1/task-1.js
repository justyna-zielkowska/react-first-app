import React from 'react';
import { getFilmsList } from "../filmsData";

const Task1 = () => {
  const filmsData = getFilmsList();
  const film = filmsData[0];

  return (
    <div class="flex-container" style={{display: 'inline-block', fontSize: 12}}>
        <h2>Tytuł: {film.Title} </h2>
        <p>Gatunek: {film.Genre} </p>
        <p>Reżyser: {film.Director}</p>
        <p>Aktorzy: {film.Actors}</p>
        <span>Rok: {film.Year}</span>
    </div>
  )}

export default Task1;