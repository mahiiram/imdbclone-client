import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Movies from './components/Movies/Movies';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminAction, userAction } from './store';
import UserProfile from './profile/UserProfile';
import AdminProfile from './profile/AdminProfile';
import Review from './components/Review/Review';
import NewMovie from './components/Movies/Addmovie';

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  console.log("isadminLoggedin",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn)

  useEffect(()=>{
    if(localStorage.getItem('userid')){
      dispatch(userAction.login())
    }else if(localStorage.getItem('adminId')){
      dispatch(adminAction.login())
    }
  },[dispatch]);
  return (
    <div >
     <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/movies' element={<Movies/>} />
          
          <Route path='/review/:id' element={<Review/>}/>
         {!isUserLoggedIn && !isAdminLoggedIn && (<>
           {" "}
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/auth' element={<Auth/>}/>
         </>)} 
          {isUserLoggedIn && !isAdminLoggedIn && (<>
           {" "}
            <Route path='/user' element={<UserProfile/>}/>
          </>)} 
          {!isUserLoggedIn && isAdminLoggedIn && (<>
          {" "}
          <Route path='/add' element={<NewMovie/>}/>
          <Route path='/adminprofile' element={<AdminProfile/>}/>
          </>) } 
        </Routes>
      </div>
    </div>
  );
}

export default App;