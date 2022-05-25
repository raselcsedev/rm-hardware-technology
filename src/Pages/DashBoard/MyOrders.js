import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-center mx-auto w-100'>
            {
                orders.map(order=> <MyOrder
                    key={order._id}
                    order={order}
                ></MyOrder>)
            }

        </div>
    );
};

export default MyOrders;