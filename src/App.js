import {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


    const [joke, setJoke] = useState("");

    const fetchJoke =  function(){
      fetch("https://api.chucknorris.io/jokes/random/")
      .then(response => response.json())
      .then(data => setJoke(data.value))
    }


  return (
    <div className="app">
    <h1>Chuck Norris Facts!</h1>
    <h2>{joke}</h2>
    <button onClick={fetchJoke}>Roundhouse me another fact!</button>
    <button onClick={fetchJoke}>Add to favourites!</button>

    </div>
  );
}

export default App;
