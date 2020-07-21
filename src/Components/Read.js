import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Components.css';

const Book = props => (
  <tr>
    <td>{ props.book.title }</td>
    <td>
      <a href="#" onClick={() => { props.deleteBook(props.book._id) }}>delete</a>
    </td>
  </tr>
)

export default class Read extends Component  {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);

    this.state = { 
      books: [] 
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/')
      .then(response => {
        this.setState({ books: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBook(id) {
    axios.delete('http://localhost:5000/books/'+id)
      .then(res => console.log(res.data));
    this.setState({ 
      books: this.state.books.filter(el => el._id !== id)
    })
  }

  bookList() {
    return this.state.books.map(currentbook => {
      return <Book book={ currentbook } deleteBook={ this.deleteBook } key = { currentbook._id } />
    })
  }

  render() {
    return (
      <div>
        <h3>Already Read Books</h3>
        <table className="table">
          <thead className="thread-light">
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            { this.bookList() }
          </tbody>
        </table>
      </div>
    )
  }
}
// function Read() {
//   return (
//     <div>
//       <h1>Read Page</h1>
//     </div>
//   );
// }
