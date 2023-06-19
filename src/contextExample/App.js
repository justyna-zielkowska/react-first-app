import React, {useState} from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Content from "./Content";
import Article from "./Article";
import Footer from "./Footer";
import { theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";

const Appp = () => {



    return (
        <>
        <ThemeContext.Provider value={theme}>
        <Header>
            <Navigation/>
            {/* <h1 style={{paddingTop: "21px"}}>CONTEXT</h1> */}
        </Header>
        <Main>
            <Content>
                <Article/>
            </Content>
        </Main>
        <Footer/>
        </ThemeContext.Provider>
        </>
    )
};

export default Appp;

