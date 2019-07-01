import React from 'react';

function PrintType() {
    return(
        <div>
            <form className="print-type">
                <label htmlFor="print-type">Print Type:</label>
                <select id="print-type">
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
            </form>
        </div>
    )
}

export default PrintType;