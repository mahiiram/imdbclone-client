import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Movieitems = ({posterurl,title,releasedate,id}) => {
  const navigate = useNavigate()
  return (

          <Card
            sx={{
              width: 250,
              height: 400,
              borderRadius: 5,
              margin: 1,
            }}>

            <img height={'50%'} width={'100%'} src={posterurl} alt={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(releasedate).toDateString()}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/review/${id}`}>
                Movie Details</Link>
            </CardActions>
          </Card>
  )
}

export default Movieitems;