
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    

    useEffect(() => {
        if (user) {
            fetch(`https://quiet-beach-66273.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data)
                );
        }
    }, [user]);

    const navigate = useNavigate();
    const navigateToPayment = id =>{
        navigate(`/payment/${id}`)
    }
    return (
        <div className='bg-info h-full'>
            <h2 className='text-2xl mt-5 pb-5 lg:text-center font-bold text-white'>My Orders</h2>
            <div class="overflow-x-auto w-full">
                <table class="table mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>User</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Bill Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map(order => <tr>

                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={order.productImg} alt="productImage" />
                                            </div>
                                        </div>
                                        <div className='text-accent'>
                                            <div class="font-bold">{order.productName}</div>
                                            <div class="text-sm ">{order.productQuantity}pcs</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.userName}
                                    <br />
                                    <span class="badge badge-ghost badge-sm">{order.userEmail}</span>
                                </td>
                                <td>{order.address}</td>
                                <td>
                                    {order.phone}
                                </td>
                                <th>
                                    <label>
                                        {(order.price || !order.paid) && <button onClick={()=> navigateToPayment(order._id)} class="btn btn-outline btn-accent  btn-xs">Payment</button>}
                                        {(order.price || order.paid) &&  <span class="text-accent">Paid</span>}
                                        
                                    </label>
                                </th>


                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;