import React from 'react';

function BookSearch (props) {

        return(
        <div>
            <form>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search" placeholder="Moby Dick"required></input>
                <button type="submit" onClick ={props.handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default BookSearch;