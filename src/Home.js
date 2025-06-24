import React from 'react'
import { useState } from 'react'
import MovieList from './MovieList'

const Home = () => {
  const [movies, setMovie] = useState([
    { title: 'Commando', body: "Action & Adventure Movie", Actor: "Arnold", year: 2010, id: 1 },
    { title: 'Delta Force', body: "Action & Adventure Movie",Actor: "Chuck Noris", year: 2012, id: 2 },
    { title: 'Predator', body: "Action & Adventure Movie",Actor: "Chuck Noris", year: 2015, id: 3 }
  ])
  return (
    <div className='home'>
    <MovieList movies = {movies} title = "Movies Blog"/>
      {/* Trying to output Arnold's movies in the list above. */}
    <MovieList movies = {movies.filter((movie) => movie.Actor === "Arnold")} title = "Arnold's Movies"/>
    </div>
  )
}

export default Home
