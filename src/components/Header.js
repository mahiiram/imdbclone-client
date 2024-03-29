import React, { useEffect } from 'react';
import { AppBar, Toolbar, Box, Autocomplete, TextField, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { getallmovies } from '../api-helpers/api-helpers';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminAction, userAction } from '../store';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getallmovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err));
    }, [])
    const logout = (isAdmin)=>{
          dispatch(isAdmin?adminAction.logout():userAction.logout())
    }
    const handleChange = (e,val)=>{
        const movie = movies.find((e)=>e.title===val);
        if(!isUserLoggedIn || isUserLoggedIn){
            navigate(`/review/${movie._id}`)
        }else if(!isAdminLoggedIn || isAdminLoggedIn){
            navigate(`/review/${movie._id}`)
        }else{
            navigate(`/review/${movie._id}`)
        }
    }
    return (
        <AppBar position='sticky' sx={{ bgcolor: "#000", margin:0 }} >
            <Toolbar>
                <Box>
                  <NavLink to={'/'}>
                  <img style={{width:"100px",height:"100px"}} src='https://cdn-icons-png.flaticon.com/512/5977/5977585.png'  alt='icon'/>
                  </NavLink>
                </Box>
                <Box width={"30%"} margin={"auto"}>
                    <Autocomplete
                        onChange={handleChange}
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) =>
                            <TextField  sx={{ input: { color: 'white' } }} {...params} placeholder="SEARCH THE MOVIES" />}
                    />

                </Box>
                <Box display={'flex'}>
                    <Tabs
                        textColor='inherit'
                        indicatorColor='secondary'
                        area-label="secondary tabs example"
                        >

                        <Tab LinkComponent={Link} to="/movies" label='Movies' />

                        {!isAdminLoggedIn && !isUserLoggedIn && (<>
                            <Tab LinkComponent={Link} to="/admin"  label='Admin' />
                            <Tab LinkComponent={Link} to="/auth"  label='User' />
                        </>
                        )}
                        {isUserLoggedIn && (
                            <>
                                <Tab LinkComponent={Link} to="/user" label='Profile' />
                                <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/" label='Logout' />
                            </>
                        )}
                        {isAdminLoggedIn && (
                            <>
                                <Tab LinkComponent={Link} to="/add" label='Add Movie' />
                                <Tab LinkComponent={Link} to="/adminprofile" label='Profile' />
                                <Tab onClick={()=>logout(true)} LinkComponent={Link} to="/" label='Logout' />
                            </>
                        )}
                    </Tabs>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header