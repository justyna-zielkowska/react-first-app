import React from 'react';
import {Link} from "react-router-dom";
import styles from "./page.module.css";

import shopProductsData from "../shopProductsData";

const ShopPage = () => {
  return (
    <div className={styles.page}>
       <h2>Shop</h2>
        <p>Products:</p>
        <ul>
          {shopProductsData.map(product => (
            <li key={product.id}>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default ShopPage;