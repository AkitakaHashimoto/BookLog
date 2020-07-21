import React from 'react';

const BookCard = (props) => {
    return (
        <div className="card-container" onClick={props.onClick}>
            <img src={props.image} alt="No Picture"/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>

        </div>
    )
}

export default BookCard;