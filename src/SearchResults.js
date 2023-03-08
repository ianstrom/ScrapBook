import React from "react";

function SearchResults({user, onClickUser}) {
    const {profileimg, username} = user
    function handleClick() {
        onClickUser(user)
    }

    return (
        <div onClick={handleClick}>
            <img src={profileimg} alt="profileimg" className="searchprofileimg"/>
            <div>{username}</div>
        </div>
    )
}

export default SearchResults