import React, { useState } from 'react';
import MainCart from './Component/MainCart/MainCart';
import Navbar from './Component/Navbar/Navbar';
import SideCart from './Component/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [movieTime , setMovieTime] = useState (0);
  const handleWatchTime = (time) => {
    const Watchtime = localStorage.getItem('watchTime')
    if(Watchtime){
       const sumOfTime = parseInt(Watchtime) + time
       localStorage.setItem('watchTime',sumOfTime)
       setMovieTime(sumOfTime)

    }
    else {
        localStorage.setItem('watchTime',time)
        setMovieTime(time)
    }
  }
  return (
    <div>
      <Navbar></Navbar>
       <div className='main part gap-4 flex p-12'>
        <MainCart handleWatchTime = {handleWatchTime} ></MainCart>
        <SideCart movieTime = {movieTime} ></SideCart>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
