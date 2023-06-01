import React from 'react';
import { getFilmsList } from "../filmsData";

const Task1 = () => {
  const filmsData = getFilmsList();
  const film = filmsData[0];

  //listowanie elementów
  const lista = ['elo', 'eloo', 'elooo']

  //JSX przypisany do zmiennej
  const header = <h2>Hello!</h2>

  //wyswietlanie warunkowe - mozna zmienic na true
  const showElement = false;

  return (
    <div class="flex-container" style={{display: 'inline-block', fontSize: 12}}>

    {/* JSX przypisany do zmiennej */}
        {header}

        <h2>Tytuł: {film.Title} </h2>
        <p>Gatunek: {film.Genre} </p>
        <p>Reżyser: {film.Director}</p>
        <p>Aktorzy: {film.Actors}</p>
        <span>Rok: {film.Year}</span>
   
    {/* listowanie elementów */}
    {lista.map(elem =><p>{elem}</p>)}

   
    {/* wyswietlanie warunkowe */}
    {showElement ? <button>Submit</button> : null}

    </div>

  )}

export default Task1; 