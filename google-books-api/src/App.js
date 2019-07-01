import React from 'react';
import './App.css';
import BookSearch from './GoogleBooks/Booksearch';
import BookType from './GoogleBooks/Booktype';
import PrintType from './GoogleBooks/Printtype';
import BookList from './GoogleBooks/Booklist';


class App extends React.Component {
  
  state = {
    items: [],
    error: null,
  }

  handleSubmit = (searchTerm) => {

    // event.preventDefault();

    console.log('TEST');

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=5&key=AIzaSyAKsOZI2ZXbMLF2Edt5u3cxTJP7cab_kC0`)
      .then(res =>{
        if(!res.ok){
          throw new Error('Something went wrong')
        }
        return res.json();
        })
        .then(resJson => {
          // console.log(resJson);
          this.setState({
            items: resJson.items
          })
        })
        .catch(err => {
          this.setState({
            error: err.message
          })
        })
  }
  
  render(){
  return (
    <div className="App">
      <h1>Google Book Search</h1>
      <BookSearch handleSumbit = {this.handleSubmit}/>
      <PrintType/>
      <BookType/>
      <BookList items={this.state.items}/>
      </div>
  );
}

}

export default App;
