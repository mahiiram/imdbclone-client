import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getallmovies } from '../../api-helpers/api-helpers';



function Posters() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getallmovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err))
    }, [])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
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
    <div>
        <Carousel responsive={responsive}>
                {movies.map((movie,index)=>{
                    return (
                        <img src={movie.posterurl} alt='leo' width={'100%'} height={'60%'} key={index}/>
                    )
                })}
         </Carousel>  
    </div>
  )
}

export default Posters