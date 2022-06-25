import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import logo from "../../assests/icons/logo.png";

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const logout = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    
    const menuItems = <>
        <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='home'>Home</Link></li>
        {admin && <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='allProducts'>All Products</Link></li>}
        <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='blogs'>Blogs</Link></li>
        <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='portFolio'>PortFolio</Link></li>
        <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='about'>About</Link></li>
        {
          user && <li><Link className='mx-auto lg:text-white font-bold lg:mr-4' to='dashboard'>Dashboard</Link></li>
        }
        <li>{ user ? <button className="btn btn-ghost mx-auto lg:text-white font-bold lg:mr-4" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link> }</li>

    </>
    return (
        <div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="navbar bg-[#112B3C] px-10"
        >
            <div className="navbar-start">
            <div className="navbar-start">
            <label tabIndex="1" for="dashboard-sidebar"  className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            
            </div>
            <div className="flex text-white text-2xl font-bold items-center gap-2">
            <img className="h-10" src={logo} alt="" />
            Technology
          </div>
            </div>
            <div className="dropdown flex navbar-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden self-end">
                    <svg className="w-6 text-white h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </label>
                <ul tabIndex="0" className="dropdown-content menu p-2 top-12 shadow bg-base-100">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;