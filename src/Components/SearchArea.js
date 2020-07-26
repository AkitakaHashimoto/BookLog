import React from 'react';
import './Components.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchArea = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="search">
                        <form onSubmit={props.searchBook} action="">
                            <input className="search-input" placeholder="Search for a Book" onChange={props.handleSearch}type="text"></input>
                            <i className="fas fa-search"></i>
                            <button className="search-button" type="submit">Search</button>
                        </form>
                    </div>
                </Col>
            </Row>
 
        </Container>
 
    )
}

export default SearchArea;