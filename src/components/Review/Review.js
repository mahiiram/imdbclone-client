import React, {useEffect, useState } from 'react'
import "./Review.css"
import { useNavigate, useParams } from 'react-router-dom'
import { getmoviedetail, newreview} from '../../api-helpers/api-helpers';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

const Review = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState();
    const [inputs, setInputs] = useState({ review: "" })
    const id = useParams().id;
    useEffect(() => {
        getmoviedetail(id)
            .then((res) => setMovies(res.movies))
            .catch((err) => console.log(err))
    }, [id,movies])
    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (localStorage.getItem('userid')) {
            if (inputs === "") {
                alert("Enter review")
            } else {
                newreview({ ...inputs, movie: movies._id })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err))
                console.log(inputs)
            }
        } else {
            navigate('/auth')
        }
    }
    console.log("movies", movies)
    return (
        <div className='maindiv'>
            <div className='firstdiv'>
                {movies && <div>
                    <Typography padding={2} variant="h5" textAlign={"start"}>
                        MOVIE:{movies.title}
                    </Typography>
                    <Box>
                        <img width="80%" height="100%" src={movies.posterurl} alt={movies.title} />
                    </Box>
                    <Box>
                        <Typography variant='h6'>Cast:{movies.actors.map((actor) => " " + actor.name + ",")}</Typography>
                        <Typography variant='h6' sx={{ borderBottom: "1px solid black" }}>Director:{movies.director.map((director) => " " + director.name + ",")}</Typography>
                        <Typography variant='h6' sx={{ borderBottom: "1px solid black" }}>Producer:{movies.producers.map((producer) => " " + producer.name + ",")}</Typography>
                        <Typography variant='h6'>Release date: {new Date(movies.releasedate).toDateString()}</Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" flexDirection={"column"}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Add review</label>
                                <input
                                    name="review"
                                    value={inputs.review}
                                    onChange={handleChange}
                                    type={"text"}
                                    margin="normal"
                                    variant="standard" placeholder='Enter review' class="form-control sm" />
                            </div>

                            <Button type="submit" variant="contained" sx={{ mt: 3 }}>Give review</Button>

                        </Box>
                    </form>
                </div>}
            </div>
            <div className="secondiv">
                {movies && <div>

                    <Card
                        sx={{
                            width: 500,
                            borderRadius: 5,
                            margin: 1,
                            backgroundColor: 'black',
                            color: "white"
                        }}>
                        <CardContent>
                            <Typography variant='h6'>{movies.description}</Typography>
                        </CardContent>
                    </Card>
                    <div>
                        <Card
                            sx={{
                                width: 500,
                                borderRadius: 5,
                                marginTop: 5,
                                backgroundColor: 'black',
                                color: "white"
                            }}>
                            <CardContent>
                                <h2>Reviews</h2>
                                <div>{movies && movies.reviews.map((review, index) => (
                                    <div style={{display:"flex",justifyContent:"space-between",border:"1px solid white",borderRadius:"5px"}}>
                                        <h5 style={{ margin: "10px" }} key={index}>{review.review}</h5>
                    
                                    </div>


                                ))}</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>}
            </div>
        </div>
    )

}

export default Review