import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState({});

  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        setJoke(response.data)
      })
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={getJoke}>Get Joke</button>
      <h3>{joke.setup}</h3>
      <h5>{joke.punchline}</h5>
    </div>
  );
}

export default App;
