import React from 'react';

function BookType() {
    return(
        <div>
            <form className="book-type">
                <label htmlFor="book-type">Book Type:</label>
                <select id="book-type">
                    <option value="No filter">No filter</option>
                    <option value="Free-eBooks">Free-eBooks</option>
                </select>
            </form>
        </div>
    )
}

export default BookType;