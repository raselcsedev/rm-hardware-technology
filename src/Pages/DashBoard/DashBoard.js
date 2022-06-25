import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile  ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <h2 className='text-2xl font-bold text-accent-focus '>Welcome to your Dashboard</h2>

                {/* <!-- Page content here --> */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-[#112B3C]">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <> 
                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Review</Link></li>
                    </>
                    }
                    {admin && <>
                        <li><Link to="/dashboard/allUsers">All Users</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    </>}
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;