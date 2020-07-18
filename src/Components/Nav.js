import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'




function Nav() {
    const navStyle= {
        color: 'white'
    };
  return (
    <nav>
        <FontAwesomeIcon icon={faBook} size="3x" style={{marginLeft:'10px'}}/>
        <h3  style={{marginLeft:'10px'}}>Booki</h3>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navStyle} to='/read'>
            <li>Read</li>
            </Link>
            <Link style={navStyle} to='/currentlyreading'>
            <li>Currently Reading</li>
            </Link>
            <Link style={navStyle} to='/wanttoread'>
            <li>Want to Read</li>
            </Link>
            <Link style={navStyle} to='/searchbooks'>
            <li>Search Books</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
