import React, { Component, Link } from 'react';
import './App.css';
import 'axios';
import logo from './images/lonely_space.jpg';


class App extends Component {
  state = {
    posts: []
  }

  getYear() {
      return new Date().getFullYear();
  }

  componentDidMount() {
    fetch("https://krux.wpengine.com/wp-json/wp/v2/posts")
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="menu">
            <li><a href="/">Home</a></li> |
            <li><a href="/thoughts">Thoughts</a></li> |
            <li><a href="/projects">Projects</a></li>
          </ul>
        </header>

        <div className="content">
          Welcome to my site! This is built in React Native.
        </div>

        <footer>
          <a href="/">
            « ∆ »
          </a>
        </footer>

      </div>
    );
  }

}

export default App;
