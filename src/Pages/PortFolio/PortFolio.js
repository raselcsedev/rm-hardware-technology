import React from 'react';
import { Link } from 'react-router-dom';

const PortFolio = () => {
    return (
        <div className="pb-36 bg-[#114a70]">
            

            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='mask mask-hexagon max-w-sm mb-12 lg:mb-2'
                >
                    <img src="images/about.png" alt='me' />
                </div>
                <div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl text-white'
                >
                    <h1 className="text-5xl font-semibold mb-2">Hi! I am <span className='text-orange-600'>Rasel</span> </h1>
                    <div className="text-2xl text-success font-semibold leading-relaxed mb-5">Front-End Web Developer
                    <div className='mb-5 lg:mb-0'>
                        <div className='flex pt-5'>
                            <a className='lg:ml-0' target='_blank' href="https://github.com/raselcsedev"><img className='hover:scale-110' src="images/icons/github.svg" alt="my GitHub" /></a>
                            <a className='lg:ml-0' target='_blank' href="https://www.linkedin.com/in/md-rasel-1a9957174/"><img className='hover:scale-110' src="images/icons/linkedin.svg" alt="my LinkedIn" /></a>
                            <a className='lg:ml-0' target='_blank' href="https://www.facebook.com/raselrezwan001"><img className='hover:scale-110' src="images/icons/facebook.svg" alt="my Facebook" /></a>

                        </div>
                    </div> 
                    </div>
                    {/* <a href={Resume} download="Rasel_Aktar_Resume.pdf"  target="_blank" download className="btn text-white btn-outline">Download Resume</a> */}
                </div>
            </div>
        </div>
    );
};

export default PortFolio;