import axios from "axios";

export const getallmovies = async()=>{
       const res =await axios.get("https://imdbclone-server-production.up.railway.app/api/movie/getallmovies").catch((err)=>console.log(err));

       console.log(res)
       if(res.status !== 200){
        return console.log("No data")
       }
       const resdata = await res.data;
       return resdata

}; 

export const sendUserAuthReq = async(data,signup)=>{
    const res = await axios.post(`https://imdbclone-server-production.up.railway.app/api/user/${signup?"signup":"login"}`,{
         name: signup? data.name : "",
         email:data.email,
         password:data.password
      }).catch((err)=>console.log(err))  
      console.log(res)
      const resdata = await res.data;
       return resdata

}

export const sendAdminAuthReq = async (data) =>{
     const res =await axios.post("https://imdbclone-server-production.up.railway.app/api/admin/login",{
      email:data.email,
      password:data.password,
   }).catch((err)=>console.log(err))
   console.log(res)

   
   const resdata = await res.data;
   return resdata
}

export const getmoviedetail = async (id)=>{
   const res = await axios.get(`https://imdbclone-server-production.up.railway.app/api/movie/${id}`).catch((err)=>console.log(err));
    console.log(res)
   const resdata = await res.data;
   return resdata
}

export const newreview = async (data)=>{
    const res = await axios.post('http://localhost:5000/api/review/create',{
        movie:data.movie,
        review:data.review,
        user:localStorage.getItem('userid')
    }).catch((err)=>console.log(err))
    console.log(res)
    if(res.status!==201 && res.status!==200 ){
      return console.log("unexpected error occured")
   } 
    const resdata = await res.data;
    return resdata
}

export const getReviews = async ()=>{

   let id= localStorage.getItem('userid')
   const res = await axios.get(`https://imdbclone-server-production.up.railway.app/api/user/getusersreview/${id}`).catch((err)=>console.log(err))
    
   if(res.status!==201){
      return console.log("unexpected error occured")
   }
     
      const resdata = await res.data;
      return resdata
};

export const deletebooking = async(id)=>{
       
       const res = await axios.delete(`https://imdbclone-server-production.up.railway.app/api/review/delete/${id}`).catch((err)=>console.log(err))
       
       if(res.status!==200 && res.status!==201){
         return console.log("unexpected err")
       }
       const resdata = await res.data;
       return resdata
}

export const getUserDetails = async () =>{
   const id = localStorage.getItem('userid');
   const res = await axios.get(`https://imdbclone-server-production.up.railway.app/api/user/${id}`).catch((err)=>console.log(err))

    const resdata = await res.data;
    return resdata

}

export const addmovie = async (data)=>{
       
   const res = await axios.post('https://imdbclone-server-production.up.railway.app/api/movie/create',{
      title: data.title,
      description: data.description,
      releasedate: data.releasedate ,
      posterurl: data.posterurl,
      featured:data.feautured,
      actors:data.actors,
      genre:data.genre,
      producers:data.producers,
      director:data.director,
      admin: localStorage.getItem('adminId')
   },{
      headers:{
         Authorization:`Bearer ${localStorage.getItem('token')}`
      } 
   }).catch((err)=>console.log(err))
     console.log(res)
   const resData = await res.data;
   return resData
}

export const getAdminbyId = async ()=>{
const adminId = localStorage.getItem('adminId')
   const res = await axios.get(`https://imdbclone-server-production.up.railway.app/api/admin/${adminId}`).catch((err)=>console.log(err))
   console.log(res)
    const resdata = await res.data
    return resdata;
};