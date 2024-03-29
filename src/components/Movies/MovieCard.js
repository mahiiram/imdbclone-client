import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getallmovies } from '../../api-helpers/api-helpers';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getallmovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err))
  }, [])
   console.log(movies)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive} >
            {movies && movies.map((movie,index)=>(
              <div className="card" style={{ width: "300px", height:"300px"}}>
              <img src={movie.posterurl} style={{width:'300px',height:"200px"}} alt={movie.title} />
              <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
              </div>
              <Link style={{textDecoration:"none",textAlign:"center"}} to={`/review/${movie._id}`}>
                Movie Details</Link>
           </div>
            ))}
    </Carousel>
  )
}

export default MovieCard;