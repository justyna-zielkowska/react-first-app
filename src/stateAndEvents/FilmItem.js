import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./FilmItem.module.css";
import DescriptionField from './DescriptionField';
import {Link} from "react-router-dom";

const FilmItem = ({film}) => {

    const [showMore, setShowMore] = useState(false);

    // const navigate = useNavigate();

    // const changeRoute = () => {
    //   navigate('/FilmsPage')
    // }


    return (

        <div style={{cursor: "pointer"}} className={styles.filmItem} onClick={() => setShowMore(!showMore)}>
            <img alt="poster" src={film.Poster}/>
            <div>
                <h2>
                    {film.Title}
                    <span style={{fontSize: 14}}> {film.Year}</span>
                </h2>
                <DescriptionField name="Genre: " value={film.Genre}/>
                <DescriptionField name="Director: " value={film.Director}/>
                <DescriptionField name="Actors: " value={film.Actors}/>
               
                <Link to={`/FilmPage/${film.Id}`}>Go to Film Page</Link>
            
             
           

           
                {showMore && 
                    
                    (<div>
                    <DescriptionField name="Released: " value={film.Released}/>
                    <DescriptionField name="Production: " value={film.Production}/>
                    <DescriptionField name="Runtime: " value={film.Runtime}/>
                    </div>)}
                    {/* <button onClick={changeRoute}>Go to Film Page</button> */}
            </div>


        </div>
    )
};

export default FilmItem;