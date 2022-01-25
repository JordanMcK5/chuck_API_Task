import React from 'react'
const FavouriteJokeList = ({favouriteJokes}) => { 
const savedJokeNodes = favouriteJokes.map((joke, index) => {
    return(
        <li key={index}>
            {joke}
        </li>
    )
})    
return (<ul>
    {savedJokeNodes}
</ul>)    
 } 
export default FavouriteJokeList;