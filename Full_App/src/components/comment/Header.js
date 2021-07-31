import React from "react";
import {NavLink} from "react-router-dom";
function Header()
{
    const style = { color: "blue"};
    return(
        <nav> 
            <NavLink to="/" activeStyle={style} exact>home</NavLink>
            {" | "}
            <NavLink to="/course" activeStyle={style} >Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={style} >about</NavLink>
            {" | "}
            <NavLink to="/api" activeStyle={style} >Api</NavLink>
        </nav>
    );
}
export default Header;