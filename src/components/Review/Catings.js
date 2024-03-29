import React ,{useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getmoviedetail } from '../../api-helpers/api-helpers';

function Castings({id}) {
  const [movies, setMovies] = useState();
  const [actor,setActor] = useState([])
  const [director,setDirector] = useState([]);
  const [producer,setProducer]=useState([]);

  const CastArry = actor.concat(director,producer)
  useEffect(() => {
    getmoviedetail(id)
        .then((res) => {
           setMovies(res.movies)
           setActor(res.movies.actors)
           setDirector(res.movies.director)
           setProducer(res.movies.producers)
        }
        )
        .catch((err) => console.log(err))
}, [id,movies])
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
            {CastArry && CastArry.map((cast,index)=>(
              <div className="card" style={{ width: "300px", height:"300px"}}>
              <img src={cast.image} style={{width:'300px',height:"200px"}} alt={cast.name} />
              <div className="card-body">
                  <h5 className="card-title">{cast.name}</h5>
              </div>
   </div>
            ))}
    </Carousel>
    
  )
}

export default Castings