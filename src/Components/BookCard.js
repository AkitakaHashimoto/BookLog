import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookCard = (props) => {
    var authors = props.authors;
    if (props.authors == null)
        authors = "Unknown";

    return (

        <Row style={{ height: '150px', borderBottom: '1px solid RGB(200,200,200)'}}>
            <Col>
                <Row style={{ height: '150px'}}>
                    <Col sm={2} style={{ display: 'block', margin: 'auto'}}>
                        <img className="card-image" src={props.image} alt="No Picture"/>
                    </Col>
                    <Col sm={10} style={{  marginTop:'15px', textAlign: 'left', display: 'block', margin: 'auto'}}>
                        <div style={{ fontFamily:'Open Sans', fontWeight:'700' }}>{props.title}</div>
                        <div style={{ fontFamily:'Open Sans', fontWeight:'400' }}>by {authors}</div>
                        <div class="dropdown">
                            <button class="dropbtn">Add to List</button>
                            <div class="dropdown-content">
                                <a href="#" onClick={props.onClickRead}>Read</a>
                                <a href="#" onClick={props.onClickCurrentlyReading}>Currently Reading</a>
                                <a href="#" onClick={props.onClickWantToRead}>Want to Read</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row> 
    )
}

export default BookCard;