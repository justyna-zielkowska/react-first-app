import React from 'react';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const changeRoute = () => {
      navigate('/FilmsLibrary')
    }
  return (
    <div>
       <h2>Welcome</h2>
        <p>You are in our amazing film library.</p>
        <button onClick={changeRoute}>Library</button>
    </div>
  );
}

export default HomePage;