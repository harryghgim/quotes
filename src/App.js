import './App.css';
import { Component } from 'react';
import quotes from './quotes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      author: '',
      idx: '' 
    };
    this.getNewQuote = this.getNewQuote.bind(this)
  }

  getNewQuote() {

    const max = quotes.length
    const idx = Math.floor( Math.random() * max )
    const text = quotes[idx].text
    const author = quotes[idx].author
    this.setState(state => ({
      idx: idx,
      author: author,
      text: text
    }))

  }

  render() {
    return (
      <div className="App">
        <div id="quote-box" key={this.state.idx}>
          <p className="container" id="text">{this.state.text}</p>
          <p id="author">{this.state.author}</p>
          <div>
            <button className="btn btn-dark me-2" onClick={this.getNewQuote} id="new-quote">new quote</button> 
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              <button className="btn btn-dark">twitter</button>
            </a>
          </div>
        </div>          
      </div>
      );
  }
}


export default App;
