import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
const MovieList = () => {
 const movies = useSelector((state)=>state.movies)
  return (
    <div>
        {movies.map((el)=><MovieCard el={el}/>)}
    </div>
    
  )
}

export default MovieList