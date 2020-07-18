import React, { Component } from 'react';
import './Components.css';
import SearchArea from './SearchArea';
import BookList from './BookList'
import request from 'superagent';


class SearchBooks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.searchBook = this.searchBook.bind(this);
  }

  searchBook = (e) => {
    e.preventDefault();
    console.log( 'Searching ' + this.state.searchField);
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        this.setState( { books: [...data.body.items]});
      })
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value})
  }

  render(){
    return (
      <div>
        <h1>Search Page</h1>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <BookList books={ this.state.books } />
      </div>
    );
  }
}

export default SearchBooks;
