import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {


    return (
        <div>
            <NavLink to="/mainfeed" className="navbar">Home</NavLink>
            <NavLink to="/profile" className="navbar">Profile</NavLink>
            <NavLink to="/createpost" className="navbar">CreatePost</NavLink>
            <NavLink to="/search" className={"navbar"}>Search</NavLink>
            <NavLink to='/' className="navbar">Sign Out</NavLink>
        </div>
    )
}

export default NavBar