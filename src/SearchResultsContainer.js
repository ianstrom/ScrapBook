import React from "react";
import SearchResults from "./SearchResults"

function SearchResultsContainer({usersToDisplay, onClickUser}) {
    const searchRender = usersToDisplay.map((user) => {
        return <SearchResults key={user.id} user={user} onClickUser={onClickUser}/>
    })

    return (
        <div className="searchResultsContainer">
            {searchRender}
        </div>
    )
}

export default SearchResultsContainer