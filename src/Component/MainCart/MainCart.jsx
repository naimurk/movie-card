import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const MainCart = ({handleWatchTime}) => {
    // console.log(handleWatchTime);
    const [movie, setMovie] = useState([])
    useEffect(()=> {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setMovie(data))
    },[])
    return (
        <div className=' grid grid-cols-1 gap-8 lg:grid-cols-3 w-8/12'>
            {
                movie.map(singleMovie => <SingleCart
                     handleWatchTime = {handleWatchTime}
                     movieDetails = {singleMovie}></SingleCart>)
            }
        </div>
    );
};

export default MainCart;