import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-beach-66273.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const navigate = useNavigate();
    const navigateToMoreProducts = () =>{
        navigate('/moreProducts')
    }
    return (
        <div>
            <h1 className='text-3xl m-3 font-bold text-success text-center uppercase'>Featured Products</h1>
            <div className='grid mt-5 justify-center mx-auto w-100 bg-[#114a70]'>
            
            <div className='grid grid-cols-1 mx-24'>
            {
                products.slice(0,3).map(product=> <Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>

            <div className='w-full flex justify-end px-24 mb-4'>
                
                <button onClick={navigateToMoreProducts} className='btn btn-ghost outline text-white uppercase'>more products....</button>
            </div>

        </div>
        </div>
    );
};

export default Products;