import {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FavouriteJokeList from "./components/FavouriteJokesList";

function App() {


    const [joke, setJoke] = useState("");


  const[favouriteJokes, setFavouriteJokes] = useState([]);

    const fetchJoke =  function(){
      fetch("https://api.chucknorris.io/jokes/random/")
      .then(response => response.json())
      .then(data => setJoke(data.value))
    }

    useEffect(() => {
      setFavouriteJokes(JSON.parse(localStorage.getItem('saved')))
    }, [])

    const addJokeToFavourites = function(){
      const copyFavouriteJokes = [...favouriteJokes, joke]
      setFavouriteJokes(copyFavouriteJokes)
      localStorage.setItem("saved", JSON.stringify(copyFavouriteJokes))
    }

  return (
    <div className="app">
    
    <h1>Chuck Norris Facts!</h1>
    <h2>{joke}</h2>
    <button onClick={fetchJoke}>Roundhouse me another fact!</button>
    <button onClick={addJokeToFavourites}>Add to favourites!</button>
    <FavouriteJokeList favouriteJokes = {favouriteJokes}/>
    </div>
  );
}

export default App;
