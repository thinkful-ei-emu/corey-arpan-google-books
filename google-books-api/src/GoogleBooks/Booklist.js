import React from 'react';
import { tsPropertySignature } from '@babel/types';

function BookList() {
return(<li>
        <h1>Moby Dick *props.title*</h1>
        <p>Author: *props.authors*</p>
        <p>Price: *props.listPrice.amount*</p>
        <p>Words about the book *props.description*</p>
        <p>Image: *props.imageLinks.thumbnail*</p>
    </li>)
}

export default BookList;