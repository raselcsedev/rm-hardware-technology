import { Avatar, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyReview from './MyReview';

const MyRiviews = () => {

    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch('https://quiet-beach-66273.herokuapp.com')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, []);



    return (
        <div>
            <h1 className='text-3xl mb-4 font-bold text-success uppercase text-center'>Client Review</h1>
            <div className='grid  p-5 justify-center mx-auto w-100 bg-[#114a70]'>

            <div className='grid lg:grid-cols-3 gap-4 text-center text-white '>
                <div >
                    <Typography component="legend"></Typography>
                    <Avatar className='mx-auto w-full' alt="Remy Sharp" src="https://media.newyorker.com/photos/606cd925407075a363d50dec/master/pass/Indurti-PersonofColorSomethingHappened.jpg" />
                    <Typography component="legend"><h1 className='text-xl font-bold'>Remy Sharp</h1></Typography>
                    <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
                    <Typography component="legend">So surprised when Emmy reached out to me regarding my review of order number 56666637. It was a very small inconvenience, but I understand that for people who aren't internet savvy, it's important to give them easy instructions! Your customer service ROCKS! Thank you again for the nice gesture she extended to me. Very grateful anytime I get excellent service these days.</Typography>
                </div>
                <div>
                    <Avatar className='mx-auto w-full' alt="Travis Howard" src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png" />
                    <Typography component="legend"><h1 className='text-xl font-bold'>Travis Howard</h1></Typography>
                    <Rating name="half-rating" defaultValue={2.0} precision={0.5} />
                    <Typography component="legend">Ordered a part that was in-stock on Tuesday. Received email that said it would arrive the next day which was later updated to Thursday. OK, no problem. FedEx tracking number isn't active because it hasn't shipped - as of Saturday. Called customer service and they were of absolutely NO help. When they say "rest assured that I will take care of you and handle your situation", you can rest assured that nothing will happen.</Typography>
                </div>
                <div>
                    <Avatar className='mx-auto w-full' alt="Cindy Baker" src="https://www.gtlaw.com/-/media/images/team/p/person-philip-i/34485largepng.png?sc_lang=en" />
                    <Typography component="legend"><h1 className='text-xl font-bold'>Cindy Baker</h1></Typography>
                    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                    <Typography component="legend">Bought a non grill from parts.com for my 300c to mod and was unaware that it did not include installation hardware along with having a slightly different mounting setup from my previous grill. I made mention of this in a review of the grill and though it was no fault of their own, they reimbursed me $20 to find hardware locally without me even reaching out to them directly.Good company, will do business there in the future, </Typography>
                </div>

            </div>




            <div className='grid grid-cols-1'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}

                    ></MyReview>)
                }
            </div>

        </div>
        </div>
    );
};

export default MyRiviews;