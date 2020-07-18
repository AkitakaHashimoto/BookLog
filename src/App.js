import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import CurrentlyReading from './Components/CurrentlyReading';
import Read from './Components/Read';
import WantToRead from './Components/WantToRead';
import SearchBooks from './Components/SearchBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/read" component={Read} />
          <Route path="/currentlyreading" component={CurrentlyReading} />
          <Route path="/wanttoread" component={WantToRead} />
          <Route path="/searchbooks" component={SearchBooks} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
