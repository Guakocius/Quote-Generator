import './App.css';
import React, {useState, useEffect} from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {

  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
          setQuotes(json);
          setQuote(json[0]);
        });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes))
  }

  return (
    <div className="main-section">
      <h1 className="initializer">Quote Generator from wise people for wise people</h1>
      <section>
          <div className="button">
          <button onClick={getNewQuote}>Click me for a new quote</button>
          </div>
          <span>"</span>
          <span className="quote">{quote?.text}</span>
          <span>"</span>
          <i>- {quote?.author}</i>
        </section>
    </div>

  );
}

export default App;
