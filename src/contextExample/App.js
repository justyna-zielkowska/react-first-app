import React, {useState} from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Content from "./Content";
import Article from "./Article";
import Footer from "./Footer";
import { themeDark, themeLight } from "./Theme";
import { ThemeContext } from "./ThemeContext";

const Appp = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <>
        <ThemeContext.Provider value={{themeDark, themeLight, isDarkMode}}>
        <Header>
            <Navigation/>
        </Header>
        <Main>
        <button onClick={()=>setIsDarkMode(!isDarkMode)}>Toggle dark mode</button>
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

