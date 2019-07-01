import React from 'react';

function BookType() {
    return(
        <div>
            <form className="book-type">
                <label htmlFor="book-type">Book Type:</label>
                <select id="book-type">
                    <option value="No filter">No filter</option>
                    <option value="eBooks">eBooks</option>
                    <option value="Free-eBooks">Free-eBooks</option>
                    <option value="Full">Full</option>
                    <option value="Paid-eBooks">Paid-eBooks</option>
                    <option value="Partial">Partial</option>
                </select>
            </form>
        </div>
    )
}

export default BookType;