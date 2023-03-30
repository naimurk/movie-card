import React from 'react';

const SingleCart = (props) => {
    // console.log(props.movieDetails);
    const { movieName, watchTime, imdbRating, description, poster } = props.movieDetails
    const handleWatchTime = props.handleWatchTime
    return (
        <div>
            <div className='border shadow-lg p-8'>
                <img className='w-80 mx-auto' src={poster} alt="" />
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>{movieName}</h1>
                    <p>{description}</p>
                     
                     <div className='flex my-3 justify-center gap-12'>
                     <p>watchTime{watchTime}</p>
                     <p>rating{imdbRating}</p>
                     </div>
                    <button onClick={()=>handleWatchTime(watchTime)} className="btn btn-wide">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;