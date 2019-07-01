import React from 'react';
import './App.css';
import BookSearch from './GoogleBooks/Booksearch';
import BookType from './GoogleBooks/Booktype';
import PrintType from './GoogleBooks/Printtype';
import BookList from './GoogleBooks/Booklist';


function App() {
  return (
    <div className="App">
      <h1>Google Book Search</h1>
      <BookSearch/>
      <PrintType/>
      <BookType/>
      <ul>
        <BookList/>
      </ul>
      </div>
  );
}

export default App;
