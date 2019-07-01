import React from 'react';

function BookList(props) {


    const list = props.items.map((book, index) => {
        return(
        <div key={index}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors}</p>
            <img src ={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"/>
            <p>Price: {book.saleInfo.listPrice.amount}</p>
            <p>{book.volumeInfo.description}</p>
            
        </div>);
    });

    return (<div>
            {list}
        </div>)

}

export default BookList;