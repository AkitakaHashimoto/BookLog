import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Components.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Book = props => (
  <tr>
    <td>
      <img className="table-image" src={props.book.image}></img>
    </td>
    <td >{ props.book.title }</td>
    <td>
      <a href="#" onClick={() => { props.deleteBook(props.book._id) }}>delete</a>
    </td>
  </tr>
)

export default class CurrentlyRead extends Component  {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);

    this.state = { 
      books: [] 
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/currentlyReading/')
      .then(response => {
        this.setState({ books: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBook(id) {
    axios.delete('http://localhost:5000/currentlyReading/'+id)
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
      <Container>
        <Row>
          <Col>
            <h3 className="list-header">Currently Reading Books</h3>
            <table className="table">
                <thead className="thread-light">
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { this.bookList() }
                </tbody>
            </table>
          </Col>
        </Row>
       
      </Container>
    )
  }
}

