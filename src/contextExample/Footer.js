import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";


const style = {
    width: "100wv",
    height: "50px",
    textAlign: "center",
    paddingTop: "20px"
    }

const Footer = () => {

const theme = useContext(ThemeContext)
    return (
        <div style={{...style, backgroundColor: theme.colors.brandPrimary}}>
           Footer
        </div>
    )

};

export default Footer;