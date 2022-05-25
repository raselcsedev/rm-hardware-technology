import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const orderSubmit = (event) => {
        event.preventDefault();
        const order = {
            productImg:product.img,
            productName: product.name,
            ProductQuantity: event.target.product.value,
            UserName: user.displayName,
            UserEmail: user.email,
            Address: event.target.address.value,
            Phone: event.target.phone.value,
            
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            toast(`Ordered Successfully for ${product.name}`)
        })

    };

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mx-auto'>
            <div>

                <div className="card my-5 lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={product.img} alt="oilPan" className="h-32 rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold text-center text-accent uppercase">{product.name}</h2>

                        <div className=''>
                            <p>{product.description}</p>
                            <h6 className=" font-bold mt-2">Price: <small className="font-bold text-accent">${product.price}/pcs</small></h6>
                            <h6 className=" font-bold">Available Quantity: <small className="font-bold text-accent">{product.quantity} pcs</small></h6>
                            <h6 className="font-bold">Minimum Order Quantity: <small className="font-bold text-accent">{product.orderQuantity} pcs</small></h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-control lg:mx-auto max-w-xs">
                <h2 className='text-2xl lg:text-center font-bold text-accent-focus'>Order Form</h2>

                <form onSubmit={orderSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                    <div class="form-control gap-3">
                    
                        <label className="input-group">
                            <span>Product: </span>
                            <input type="text" name="productName" readOnly value={product.name} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="input-group">
                            <span>Quantity:</span>
                            <input type="text" name="product" placeholder={product.orderQuantity}  className="input input-bordered w-full max-w-xs" required />
                        </label>
                    </div>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Order" className="btn btn-outline mt-2 btn-accent w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default Purchase;