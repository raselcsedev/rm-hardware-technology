import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl lg:text-center font-bold text-accent-focus'>My Orders</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>User</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map(order => <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
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
                                <th>
                                    <button class="btn btn-ghost btn-xs">{order.phone}</button>
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