import React from 'react';

function BookSearch() {
    return(
        <div>
            <form>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search" placeholder="Moby Dick"required></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default BookSearch;