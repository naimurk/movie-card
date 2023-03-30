import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SideCart = ({movieTime}) => {
    // console.log(movieTime);
    const [time, setTime] = useState(movieTime)
    const [breakTime, setBreakTime] = useState(0)
    
    useEffect(()=> {
        const getTimeFromLocalStorage = localStorage.getItem('watchTime')
        setTime(getTimeFromLocalStorage)
        const breakTimeFromLocalStorage = localStorage.getItem('breaktime')
        setBreakTime(breakTimeFromLocalStorage)
    },[movieTime])

    let sum = 0
    const handleBreaktime =  (bt) => {
        sum = sum + bt
        setBreakTime(sum)
        localStorage.setItem('breaktime', sum)
        
    }
    
    const tostify = () => {
        const minus = time - breakTime
        setTime(minus, "wow so easy")
        toast(minus);
    }
    return (
        <div className='w-1/3 border shadow-lg text-center p-12'>
            <h1 className='text-3xl font-bold'>My Cart</h1>
            <p className='text-lg mt-11'>total watch time</p>
            <input type="text" value={time} placeholder="Type here" className=" mt-5 input input-bordered w-full max-w-xs" />
            <p className='text-lg mt-11'>add a break tiem</p>
            <div className='my-5'>
                <button onClick={()=>handleBreaktime(15)} className="btn mx-2">15</button>
                <button onClick={()=>handleBreaktime(20)} className="btn mx-2 btn-primary">20</button>
                <button onClick={()=>handleBreaktime(25)} className="btn mx-2 btn-secondary">25</button>
                <input type="text" value={breakTime} placeholder="Type here" className=" mt-5 input input-bordered w-full max-w-xs" />
            </div>
            <button onClick={()=> tostify()} className="btn btn-wide">Calculate Now</button>
        </div>
    );
};

export default SideCart;