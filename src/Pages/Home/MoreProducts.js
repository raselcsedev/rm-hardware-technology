import React, { useEffect, useState } from 'react';
import Product from './Product';


const MoreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-beach-66273.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    
    return (
        <div className='grid mt-5 justify-center mx-auto w-100'>
            <h1 className='text-3xl m-3 font-bold text-success text-center'>Featured Products</h1>
            <div className='grid grid-cols-1'>
            {
                products.map(product=> <Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>

        </div>
    );
};

export default MoreProducts;