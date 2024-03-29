import { Box, Typography, Button} from '@mui/material';
import React from 'react';
import { Link} from 'react-router-dom';
import './homepage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Posters from './Movies/Posters';
import MovieCard from './Movies/MovieCard';

const Homepage = () => {
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
            <Box display="flex" padding={5} margin="auto">
                <Button LinkComponent={Link} to="/movies" variant="contained" sx={{ margin: 'auto', color: 'white' }} > View All Movies</Button>
            </Box>
        </Box>
           <Box marginLeft={"40px"} marginBottom={'60px'}>
           <MovieCard />
           </Box>
        </div>
    )
}

export default Homepage;