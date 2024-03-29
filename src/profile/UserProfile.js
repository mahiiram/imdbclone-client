import React, { Fragment, useEffect, useState } from 'react';
import { deletebooking, getUserDetails, getReviews } from '../api-helpers/api-helpers'
import { Box,Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
const UserProfile = () => {
   const[reviews,setReviews] = useState();
   const [user,setUser] = useState()
  useEffect(()=>{
    getReviews().then((res)=>setReviews(res.reviews)).catch((err)=>console.log(err));

    getUserDetails().then((res)=>setUser(res.user)).catch((err)=>console.log(err))
  },[reviews])
    
  const handleDelete = (id)=>{
      deletebooking(id).then((res)=>console.log(res)).catch((err)=>console.log(err))
      console.log(id)
  }
  console.log(user)
  console.log(reviews)
  return (
    <div>
      <Fragment>
          {" "}
     {user &&(<Box 
          flexDirection={'column'} 
          justifyContent={'center'} 
          alignItems={'center'} 
          width={"30%"}
          padding={3} >
          <AccountCircleIcon sx={{fontSize:"10rem", textAlign:"center", ml:10}} />
          <Typography 
          padding={1}
          width={'80%'} 
          marginBottom={1}
          textAlign={'center'} 
          border={'1px solid #ccc'} borderRadius={6}>
          Name : {user.name}
          </Typography>
          <Typography 
          padding={1}
          width={'80%'} 
          textAlign={'center'} 
          border={'1px solid #ccc'} borderRadius={6}>
          Email : {user.email}
          </Typography>
         </Box>)}
          <div>
            <h1>Reviews</h1>
            {reviews && reviews.map((review,index)=>(
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid white",borderRadius:"5px"}}>
              <h5 style={{ margin: "10px" }} key={index}>{review.review}</h5>
              <div>
              <DeleteIcon onClick={()=>handleDelete(review._id)} />
              </div>
          </div>
            ))}
          </div>
      </Fragment>
    </div>
  )
}

export default UserProfile