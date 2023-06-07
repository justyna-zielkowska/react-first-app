import React, { useState } from 'react';
import styles from "./module.css";
import DescriptionField from './DescriptionField';


const FilmItem = ({film}) => {

    const [showMore, setShowMore] = useState(false);


    return (

        <div style={{cursor: "pointer"}} className={styles.FilmItem} onClick={() => setShowMore(!showMore)}>
            <img alt="poster" src={film.Poster}/>
            <div>
                <h2>
                    {film.Title}
                    <span className={styles.filmYear}> {film.Year}</span>
                </h2>
                <DescriptionField name="Genre: " value={film.Genre}/>
                <DescriptionField name="Director: " value={film.Director}/>
                <DescriptionField name="Actors: " value={film.Actors}/>

           
                {showMore && 
                    
                    (<div>
                    <DescriptionField name="Released: " value={film.Released}/>
                    <DescriptionField name="Production: " value={film.Production}/>
                    <DescriptionField name="Runtime: " value={film.Runtime}/>
                    </div>)}

            </div>


        </div>
    )
};

export default FilmItem;