import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Menu from './Menu';
import HomePage from './HomePage';
import FilmsLibrary from './FilmsLibrary';
import Filmpage from './FilmPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Link to="/"><h1>Logo</h1></Link>
            <div>
                <Menu /> 
                <Routes>
                <Route path="/Filmpage/:filmId" element={<Filmpage />}/>  
                    <Route path="/FilmsLibrary" element={<FilmsLibrary />}/>  
                    <Route path="/Filmpage" element={<Filmpage />}/>  
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Routing;