import React from 'react';
import './About.css'


const About = () => {
    return (
        <div className='about'>
            <div className='align-items-center justify-content-center w-100'>
                
                <div class="card text-center lg:w-lg m-5 p-5 bg-base-100 shadow-xl">
                    <h2 className='w-100 mt-5 mb-5 pb-5'> <span className='text-accent'>RM</span> HardWare Technology</h2>

                    <h3 className='text-success mt-5 pt-5'>Get in Touch</h3>
                    <p className='mb-0'>Email:<small className='text-primary mb-0'>raselcse.dev@gmail.com</small></p>
                    <p className='mt-0'><small>Extension Pallabi, <br /> Dhaka-1216</small></p>

                </div>
            </div>
            
        </div>
    );
};

export default About;