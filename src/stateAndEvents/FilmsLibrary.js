import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { getFilmsList } from '../filmsData';
import FilmsList from "./FilmList";
import FilterInput from './FilterInput';
import AddFilm from './AddFilm';
import {Link} from "react-router-dom";



const filmsData = getFilmsList();



const FilmsLibrary = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const [filters, setFilters] = useState({
    byTitle: '',
    byYear: '',
  })
  const [filmsAddedByUser, setFilmsAddedByUser] = useState([]);

  const allFilms = [...filmsData, ...filmsAddedByUser];
  

  const filmSortedByTitle = allFilms.filter(
    film => film.Title.toLowerCase().includes(filters.byTitle.toLowerCase())
  );
  const filmSortedByYear = filmSortedByTitle.filter(
    film => film.Title.toLowerCase().includes(filters.byYear.toLowerCase())
  );
  const sortedFilms = [...filmSortedByYear].sort(
    (film, nextFilm) => sortAscending ? (film.Year - nextFilm.Year) : (nextFilm.Year - film.Year)
  );

  const navigate = useNavigate();

    const changeRoute = () => {
      navigate('/HomePage')
    }

  return (
    <>
      <h1>Films Library</h1>
      <FilterInput label="Filter by title" onFilterSave={(value) => setFilters({ ...filters, byTitle: value })} />
      <FilterInput label="Filter by year" onFilterSave={(value) => setFilters({ ...filters, byYear: value })} />
      <p>Sort:</p>
      <button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? 'Ascending' : 'Descending'}</button>
      <FilmsList title="Films list:" films={sortedFilms} />
      <AddFilm onAdd={(values) => setFilmsAddedByUser([...filmsAddedByUser, values])} />
      <p></p>
      <button onClick={changeRoute}>Back to Home Page</button>
    </>
  )
}
export default FilmsLibrary;

