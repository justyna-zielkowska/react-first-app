import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";


const style = {
width: "100wv",
height: "50px",
textAlign: "center",
paddingTop: "20px"
}

const Header = ({children}) => {

    const {themeDark, themeLight, isDarkMode} = useContext(ThemeContext);

    return (
        <div style={{...style, backgroundColor: isDarkMode
        ? themeDark.colors.backgroundColor 
        : themeLight.colors.backgroundColor}}>
         {children}    
        </div>
    )

};

export default Header;