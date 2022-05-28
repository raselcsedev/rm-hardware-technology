import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';


const stripePromise = loadStripe('pk_test_51L47IjFs37LrZPbz5KN88UqiPuY4c4LCRJ92vcETqk8PMrpWpJAINriWVYhuNSB2BNyPbEEWTqwdh3kRPi0TG4LJ009dgR4OqQ');

const Payment = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
            

            <div className="form-control  max-w-xs">
                <h2 className='text-2xl lg:text-center font-bold text-accent-focus'>Pay the Bill</h2>

                <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">User Name </span>
                    </label>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">User Email</span>
                    </label>
                    <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Product Id </span>
                    </label>
                    <input type="text" name="productId" disabled value={id} className="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder='Quantity' className="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder='Price' className="input input-bordered w-full max-w-xs" />
                </div>
                </form>

            </div>

            <div className='card flex-shrink-0  mt-5 w-50 max-w-md shadow-2xl bg-base-100'>
                <div className='card-body h-100'>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;