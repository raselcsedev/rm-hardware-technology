import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mx-auto'>
            <div className="card mb-5 lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={product.img} alt="oilPan" className="h-32 rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-2xl font-bold text-center text-accent uppercase">{product.name}</h2>

                    <div className=''>
                        <p>{product.description}</p>
                        <h6 className=" font-bold mt-2">Price: <small className="font-bold text-accent">{product.price}/pcs</small></h6>
                        <h6 className=" font-bold">Available Quantity: <small className="font-bold text-accent">{product.quantity} pcs</small></h6>
                        <h6 className="font-bold">Minimum Order Quantity: <small className="font-bold text-accent">{product.orderQuantity} pcs</small></h6>
                    </div>
                </div>
            </div>

            <div className="form-control  max-w-xs">
                <h2 className='text-2xl text-center font-bold text-accent-focus'>Order Form</h2>
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                
            </div>
        </div>
    );
};

export default Purchase;