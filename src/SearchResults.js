import React from "react";

function SearchResults({user, onClickUser}) {
    const {profileimg, username} = user
    function handleClick() {
        onClickUser(user)
    }

    return (
        <div className="searchResult" onClick={handleClick}>
            <img src={profileimg} alt="profileimg" className="searchprofileimg"/>
            <div className="profileSearchName" >{username}</div>
        </div>
    )
}

export default SearchResults