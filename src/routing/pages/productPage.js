import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styles from "./page.module.css";

import shopProductsData from "../shopProductsData";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate('/shop')
  }

  const product = shopProductsData.find(product => product.id === parseInt(productId, 10))

  return (
    <div className={styles.page}>
      <h2>{product?.name}</h2>
      <span>Price: </span>
      <span>{product?.price}</span>
      <hr/>
      <button onClick={changeRoute}>Back to shop</button>
    </div>
  );
}

export default ProductPage;