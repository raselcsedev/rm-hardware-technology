import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    
    const reviewSubmit = (event) => {
        event.preventDefault();
        const review = {
            
            review: event.target.review.value,
            ratings: event.target.ratings.value,
            
        }
        fetch('https://quiet-beach-66273.herokuapp.com', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast(`Review Successfully`)
        })

    };

    return (
        <div className='card w-96 mx-auto mt-5 bg-base-100 shadow-xl'>
            <h2 className='text-2xl mt-5 pb-5 lg:text-center font-bold '>Add a Review</h2>
            <form onSubmit={reviewSubmit}>
            <div className='card-body w-full mx-auto'>
            <div>
            <textarea name='review' class="textarea textarea-bordered w-full p-5" placeholder="review"></textarea>
            </div>
            <div>
            <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
            </div>

            <div>
            <input type="submit" value="submit" className="btn btn-outline mx-auto btn-accent w-50 btn-sm" />
            </div>
            
            </div>
            </form>
        </div>
    );
};

export default AddReview;