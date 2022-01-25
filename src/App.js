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
    
    <img className="main_logo" height="250" src={`${process.env.PUBLIC_URL}/heading.png`}  />
    <h2>{joke}</h2>
    <button onClick={fetchJoke}>Roundhouse me another fact!</button>
    <button onClick={addJokeToFavourites}>Add to favourites!</button>
    <h3>Your Favourite Facts</h3>
    <FavouriteJokeList favouriteJokes = {favouriteJokes}/>
    <img className="chuckgif" height="100" src={`${process.env.PUBLIC_URL}/roundhouse.gif`}  />
    </div>
  );
}

export default App;
