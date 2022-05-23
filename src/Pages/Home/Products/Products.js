import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('parts.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid mt-5 justify-center mx-auto w-100'>
            <h2 className='text-2xl m-3 font-bold text-success text-center'>Featured Products</h2>
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