import React from 'react';

class BookSearch extends React.Component {
    state = {searchTerm: {value: ''}};
    setSearchTerm = (searchTerm) => {
        this.setState({searchTerm: {value: searchTerm}})
    }
        render(){
        return(<div>
                <form onSubmit ={e => {
                    e.preventDefault()
                    this.props.handleSubmit(this.state.searchTerm.value)}}>
                    
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search" 
                    placeholder="Moby Dick" value={this.state.searchTerm.value} 
                    onChange={e => this.setSearchTerm(e.target.value)}></input>
                <button type="submit" 
                    >Search</button>
                
                </form>
                </div>
        
        )
        }
}
export default BookSearch;