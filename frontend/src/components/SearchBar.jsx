import React from "react";

const SearchBar = ({ setState }) => {
    return (
        <form>
            <input
                type="text"
                onChange={(event) => setState(event.target.value)}
            />
        </form>
    );
};

export default SearchBar;
