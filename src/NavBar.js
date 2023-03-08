import React from "react";
import home from "./icons/home.png"
import signout from "./icons/signout.png"
import createpost from "./icons/createpost.png"
import search from "./icons/search.png"
import { NavLink } from "react-router-dom";

function NavBar({myUser, signOut}) {
    const {profileimg} = myUser


    return (
        <div id="navbar">
            <NavLink to="/mainfeed" className="navbar"><img className="nav-image" src={home}/></NavLink>
            <NavLink to="/profile" className="navbar"><img id="profile-image-link" src={profileimg}/></NavLink>
            <NavLink to="/createpost" className="navbar"><img className="nav-image" src={createpost}/></NavLink>
            <NavLink to="/search" className={"navbar"}><img className="nav-image" src={search} /></NavLink>
            <NavLink to='/' className="navbar"><img className="nav-image" src={signout} onClick={signOut}/></NavLink>
        </div>
    )
}

export default NavBar