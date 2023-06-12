import React from 'react';
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
       <h2>Welcome</h2>
        <p>You are in our amazing grocery store.</p>
    </div>
  );
}

export default HomePage;