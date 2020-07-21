import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard'
import axios from 'axios';

const BookList = (props) => {

    const [readBooks, setReadBooks] = useState([]);

    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                onClick={() => {
                                    setReadBooks([...readBooks, book]);
                                    console.log(book.volumeInfo.title);
                                    const title = {
                                        title: book.volumeInfo.title,
                                    }
                                    axios.post('http://localhost:5000/books/add', title)
                                    .then(res => console.log(res.data));
                                }}
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.authors}
                                published={book.publishedDate}
                    />
                })
            }
        </div>
    )
}

export default BookList;