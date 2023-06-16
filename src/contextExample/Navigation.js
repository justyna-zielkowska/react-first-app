import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    listStyle: "none",
    margin: "0 auto"
}

const Navigation = () => {


    const theme = useContext(ThemeContext)

    return (
        <div>
         <ul style={{...style, backgroundColor: theme.colors.brandPrimary}}>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
         </ul>
        </div>
    )

};

export default Navigation;