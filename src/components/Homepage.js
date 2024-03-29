import { Box, Typography, Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Movieitems from './Movies/Movieitems';
import { Link, useNavigate} from 'react-router-dom';
import { getallmovies } from '../api-helpers/api-helpers';
import './homepage.css';
import SliderMovies from './Movies/SliderMovies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Posters from './Movies/Posters';

const Homepage = () => {
     const navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getallmovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err))
    }, [])
    
    return (

        <div className='homepage'>
            <Box width={'100%'} height={'100%'} margin="auto" marginTop={2}>
            <Box margin={'auto'} width="80%" height={'60vh'} padding={2}>
                   <Posters />
            </Box>
            <Box display="flex" flexDirection={'column'} padding={2} margin="auto" marginTop={'20px'}>
                <Typography variant='h4' textAlign={'center'} color={'white'}>
                    Latest Releases
                </Typography>
                <Typography variant="p" textAlign={'center'} color={'white'}>Adminid:Admin1@imdb.com password:12345678</Typography>
            </Box>
            <Box display='flex' width="80%" justifyContent={'center'} flexWrap={'wrap'} margin="auto" >
            {movies && movies.slice(0,4).map((movie, index) => (
                    <Movieitems id={movie._id} title={movie.title} posterurl={movie.posterurl} releasedate={movie.releasedate} key={index} />
                ))}

            </Box>
            <Box display="flex" padding={5} margin="auto">
                <Button LinkComponent={Link} to="/movies" variant="contained" sx={{ margin: 'auto', color: 'white' }} > View All Movies</Button>
            </Box>
        </Box>
        </div>
    )
}

export default Homepage;