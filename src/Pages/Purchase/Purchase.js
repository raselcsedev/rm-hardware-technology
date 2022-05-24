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
        <div>
            <div class="card lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img className='h-40' src={product.img} alt="oilPan" class="rounded-xl" />
                </figure>
                <div class="card-body ">
                    <h2 class="text-2xl font-bold text-center text-accent uppercase">{product.name}</h2>

                    <div className=''>
                        <p>{product.description}</p>
                        <h6 class=" font-bold mt-2">Price: <small class="font-bold text-accent">{product.price}/pcs</small></h6>
                        <h6 class=" font-bold">Available Quantity: <small class="font-bold text-accent">{product.quantity} pcs</small></h6>
                        <h6 class="font-bold">Minimum Order Quantity: <small class="font-bold text-accent">{product.orderQuantity} pcs</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;