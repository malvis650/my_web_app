import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieList from './MovieList'

const Home = () => {
    const [movies, setMovie] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/movies')
            .then((res) => {
                return res.json()
            })
            .then((data) =>{ 
                console.log(data)
                setMovie(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);

    return ( 
        <div className = 'home' >
        
        <MovieList movies = { movies } title = "Movies Blog"/>

        </div>
    )
}

export default Home