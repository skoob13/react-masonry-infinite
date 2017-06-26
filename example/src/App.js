import React, { Component } from 'react';
import Masonry from 'react-masonry-infinite';
import shortid from 'shortid';
import GithubIcon from './github';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      elements: this.generateElements(),
    };
  }

  colors = ['#EC407A', '#EF5350', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#827717', '#EF6C00'];

  heights = [200, 300, 300, 400, 400, 450];

  getRandomElement = array => array[Math.floor(Math.random() * array.length)];

  generateElements = () => [...Array(10).keys()].map(() => ({
    key: shortid.generate(),
    color: this.getRandomElement(this.colors),
    height: `${this.getRandomElement(this.heights)}px`,
  }));

  loadMore = () => setTimeout(() => this.setState(state => ({
    elements: state.elements.concat(this.generateElements()),
  })), 2500);

  render() {
    return (
      <div className="App">
        <h1>React Masonry Infinite Scroller</h1>
        <div className="container">
          <Masonry
            className="masonry"
            hasMore={this.state.hasMore}
            loader={
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube" />
                <div className="sk-cube2 sk-cube" />
                <div className="sk-cube4 sk-cube" />
                <div className="sk-cube3 sk-cube" />
              </div>
            }
            loadMore={this.loadMore}
          >
            {
              this.state.elements.map(({ key, color, height }, i) => (
                <div key={key} className="card" style={{ background: color, height }}>
                  <h2>{i}</h2>
                </div>
              ))
            }
          </Masonry>
        </div>
        <a href="https://github.com/skoob13/react-masonry-infinite">
          <img alt="Icon" src={GithubIcon} className="icon" />
        </a>
      </div>
    );
  }
}

export default App;
