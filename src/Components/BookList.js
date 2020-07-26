import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const BookList = (props) => {

    const [readBooks, setReadBooks] = useState([]);
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);

    return (
        <Container style={{ borderTop: '2px solid RGB(200,200,200)', width: '50%', marginTop: '10px'}}>
            <div>
                {
                    props.books.map((book, i) => {
                        return <BookCard 
                                    onClickRead={() => {
                                        setReadBooks([...readBooks, book]);
                                        console.log(book.volumeInfo.title);
                                        const info = {
                                            title: book.volumeInfo.title,
                                            image: book.volumeInfo.imageLinks.thumbnail,
                                        }
                                        axios.post('http://localhost:5000/books/add', info)
                                        .then(res => console.log(res.data));
                                    }}
                                    onClickCurrentlyReading={() => {
                                        setCurrentlyReadingBooks([...currentlyReadingBooks, book]);
                                        console.log(book);
                                        const info = {
                                            title: book.volumeInfo.title,
                                            image: book.volumeInfo.imageLinks.thumbnail,
                                        }
                                        axios.post('http://localhost:5000/currentlyReading/add', info)
                                        .then(res => console.log(res.data));
                                    }}
                                    onClickWantToRead={() => {
                                        setWantToReadBooks([...wantToReadBooks, book]);
                                        console.log(book);
                                        const info = {
                                            title: book.volumeInfo.title,
                                            image: book.volumeInfo.imageLinks.thumbnail,
                                        }
                                        axios.post('http://localhost:5000/wantToRead/add', info)
                                        .then(res => console.log(res.data));
                                    }}
                                    key={i}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    published={book.volumeInfo.publishedDate}
                        />
                    })
                }
            </div> 
        </Container>
    )
}

export default BookList;