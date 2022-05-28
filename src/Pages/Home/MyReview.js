import React from 'react';

const MyReview = ({myReview}) => {
    const {review, ratings} = myReview;
    return (
        <div>
            <div className="card w-full my-5 lg:card-side  bg-base-100 justify-center shadow-xl">
                <div className="card-body">
                    <h2 className='text-xl text-accent'>Review : <span className='text-sm text-black' >{review}</span></h2>
                    <h5 className='text-accent text-l'>Ratings : <small className='text-secondary '>{ratings}</small></h5>
                    </div>
                </div>
            </div>
    );
};

export default MyReview;