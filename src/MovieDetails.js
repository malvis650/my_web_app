import React from 'react'
import loading from './loading.gif'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const MovieDetails = (movies, title) => {
    const {id} = useParams()
    const {data: movies, setIsPending, error} = useFetch('http://localhost:8000/movies' + id)
  return (
    <div className='bog-details'>
        <h2>Blog Details - {id}</h2>
        {setIsPending && <div><img src={loading} alt="Loading..."/></div>}
        {error && <div>{error}</div>}  
        {movies &&(
                <article>
                    <h2>{movies.title}</h2>
                    <p>{movies.body}</p>
                    <p>Actor: {movies.Actor}</p>
                    <p>Year: {movies.year}</p>
                </article>
            )}    
    </div>
  )
}

export default MovieDetails
