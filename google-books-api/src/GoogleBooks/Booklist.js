import React from 'react';

function BookList(props) {


    const list = props.items.map((book, index) => {
        return(
        <div key={index}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.printType}</p>
            <img src ={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"/>
            {/* <p>Price: {book.retailPrice.amount}</p> */}
            <p>{book.volumeInfo.description}</p>
            
        </div>);
    });

    // const filter = list.filter(book =>{
    //     if (BookType="Book" && book.volumeInfo.printType = "BOOK")
    // })


    return (<div>
            {list}
        </div>)

}

export default BookList;