import React, { useState } from "react";
import SearchResultsContainer from "./SearchResultsContainer";

function Search({ users, onClickUser }) {
    const [search, setSearch] = useState("")

    const usersToDisplay = users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="searchContainer">
            <form >
                <div class="input">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Username"></input>
                </div>
            </form>
            {search === "" ? null : <SearchResultsContainer usersToDisplay={usersToDisplay} onClickUser={onClickUser} />}
        </div>
    )
}

export default Search
