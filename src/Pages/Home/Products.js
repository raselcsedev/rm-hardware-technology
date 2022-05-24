import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid mt-5 justify-center mx-auto w-100'>
            <h1 className='text-3xl m-3 font-bold text-success text-center'>Featured Products</h1>
            <div className='grid grid-cols-1'>
            {
                products.slice(0,3).map(product=> <Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>

        </div>
    );
};

export default Products;