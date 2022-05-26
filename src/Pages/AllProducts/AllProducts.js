import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete = (id) => {
        const delivery = window.confirm('are you sure?');
        if (delivery) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    };
    return (
        <div className='grid mt-5 justify-center mx-auto w-100'>
        <h1 className='text-3xl m-3 font-bold text-success text-center'>Manage All Products</h1>
        <div className='grid grid-cols-1'>
        { 
            products.map(product=> <section key={product._id}>
            <div className="card w-full my-5 lg:card-side bg-base-100 justify-center shadow-xl">
                <figure><img style={{height:'200px', width:'300px'}} className="px-2" src={product.img} alt="Album"/> </figure> 
                <div className="card-body">
                    <h1 className="card-title text-2xl font-bold">Parts : <h2 className='text-xl text-secondary'>{product.name}</h2></h1>
                    <p>{product.description}</p>
                    <h5 className='font-bold'>Minimum Order Quantity : <small className='text-secondary '>{product.orderQuantity}</small></h5>
                    <h5 className='font-bold'>Available Quantity : <small className='text-secondary'>{product.quantity}</small></h5>
                    <h5 className='font-bold'>Price : <small className='text-secondary'>${product.price}/pcs</small></h5>
                    <div className="card-actions justify-start">
                    <button onClick={() => handleDelete(product._id)} className="btn btn-success text-white uppercase px-12">Delete</button>
                    </div>
                </div>
            </div>
            </section>)
        }
        </div>

    </div>
    );
};

export default AllProducts;