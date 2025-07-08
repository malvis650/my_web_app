import { use } from 'react'
import MovieList from './MovieList'
import loading from './loading.gif'
import useFetch from './useFetch'

const Home = () => {

    const{data: movies, setIsPending, error} = useFetch('http://localhost:8000/movies')

   

    return ( 
        <div className = 'home' >
            {error && <div>{error}</div>}
            {setIsPending && <div className='image'><img src={loading} alt="Loading..."/></div>}
            {movies && <MovieList movies = { movies } title = "Movies Blog"/>}
        </div>
    )
}

export default Home