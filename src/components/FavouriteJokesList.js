import React from 'react'

const FavouriteJokesList = ({allBeers, onSelectedBeer}) => {
    const filteredBeers = allBeers.filter((beer) => {
        return beer.favourite
    })

    const listNodes = filteredBeers.map((beer, index) => {
        return (
        <div>
        <img key={index} src={beer.image_url} height="200" alt="fav-beer-img" onClick={() => {onSelectedBeer(beer)}}/>
        </div>
        )
    })

    return(
        <>
        <div>
            <h2>Favourite Beers Wall</h2>
                <div className="favourite-beers">
                {listNodes}
                </div>
        </div>
        </>
    )
}

export default FavouriteBeersList;