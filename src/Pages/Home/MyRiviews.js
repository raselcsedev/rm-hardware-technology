import React, { useEffect, useState } from 'react';
import MyReview from './MyReview';

const MyRiviews = () => {

    const [myReviews, setMyReviews] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-beach-66273.herokuapp.com')
        .then(res=>res.json())
        .then(data=>setMyReviews(data))
    },[]);
    


    return (
        <div className='grid  mt-5 justify-center mx-auto w-100'>
            <h1 className='text-3xl m-3 font-bold text-success text-center'>Reviews</h1>
            <div className='grid grid-cols-1'>
            {
                myReviews.map(myReview=> <MyReview
                key={myReview._id}
                myReview={myReview}
                
                ></MyReview>)
            }
            </div>

        </div>
    );
};

export default MyRiviews;