import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl mb-2 lg:text-center font-bold text-accent-focus'>My Orders</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
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
                                        <button class="btn btn-outline btn-accent  btn-xs">Payment</button>
                                        <button class="btn btn-outline btn-error ml-2 btn-xs">Cancel</button>

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