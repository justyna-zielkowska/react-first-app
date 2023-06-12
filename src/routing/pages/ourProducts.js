import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./page.module.css";

const OurProducts = () => {
    const navigate = useNavigate();

    const changeRoute = () => {
      navigate('/shop')
    }
    return (
      <div className={styles.page}>
         <h2>Our Products</h2>
          <p>HEHEHEHEHEHEHHEHEHHEHHEHEH</p>

          <button onClick={changeRoute}>Back to shop</button>
      </div>
    );
  }
  
  export default OurProducts;