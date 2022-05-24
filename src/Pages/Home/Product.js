import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, img, description, orderQuantity, quantity, price} = product;
    return (
        <div>
            <div className="card w-full my-5 lg:card-side bg-base-100 justify-center shadow-xl">
                <figure><img style={{height:'200px', width:'300px'}} className="px-2" src={img} alt="Album"/> </figure> 
                <div className="card-body">
                    <h1 className="card-title text-2xl font-bold">Parts : <h2 className='text-xl text-secondary'>{name}</h2></h1>
                    <p>{description}</p>
                    <h5 className='font-bold'>Minimum Order Quantity : <small className='text-secondary '>{orderQuantity}</small></h5>
                    <h5 className='font-bold'>Available Quantity : <small className='text-secondary'>{quantity}</small></h5>
                    <h5 className='font-bold'>Price : <small className='text-secondary'>${price}</small></h5>
                    <div className="card-actions justify-start">
                        <Link to="/purchase"><button className="btn btn-success text-white lowercase px-12">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;