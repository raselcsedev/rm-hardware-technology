import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, img, description, orderQuantity, quantity} = product;
    return (
        <div>
            <div className="card w-full my-5 lg:card-side bg-base-100 justify-center shadow-xl">
                <figure><img style={{height:'200px', width:'300px'}} className="px-2" src={img} alt="Album"/> </figure> 
                <div className="card-body">
                    <h2 className="card-title">Parts : {name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order Quantity : {orderQuantity}</p>
                    <p>Available Quantity : {quantity}</p>
                    <div className="card-actions justify-start">
                        <Link to=""><button className="btn btn-success text-white px-12">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;