import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Favoritemovie from './Favoritemovie';
import Food from './Food';
import About from './About';
import Blog from './Blog';

class Post extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div id='links'>
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/favoritemovie">Favoritemovie</Link>
            <Link to="/food">Food</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={
          () => (<Blog
          title={"Dinosaurs are awesome"}
          author={"Stealthy Stegosaurus"}
          body={"Check out this body property!"}
          comments={["First!", "Great post", "Hire this author now!"]}
          />

)}/>
          <Route path="/favoritemovie" component={Favoritemovie} />
          <Route path="/food" component={Food} />
          <Route path="/about" component={About} />
          </div>
        </Router>


      </div>

    );
  }
}

export default Post;
