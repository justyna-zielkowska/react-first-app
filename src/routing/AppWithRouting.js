import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import styles from './AppWithRouting.module.css';
import Menu from './components/menu';
import HomePage from './pages/homepage';
import Contact from './pages/contact';
import ShopPage from './pages/shopPage';
import ProductPage from './pages/productPage';
import OurProducts from './pages/ourProducts';
import Cos from './pages/cos';

const AppWithRouting = () => {
    return (
        <BrowserRouter>
            <Link to="/"><h1>Logo</h1></Link>
            <div className={styles.appContainer}>
                <Menu /> 
                <Routes>
                    <Route path="/shop/:productId" element={<ProductPage />}/> 
                    <Route path="/shop" element={<ShopPage />}/>
                    <Route path="/ourProducts" element={<OurProducts />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/cos" element={<Cos />}/>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppWithRouting;