import React from 'react';
import { Link } from 'react-router-dom';

const PortFolio = () => {
    return (
        <div>
            <div class="card text-center lg:w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div>
                        <h1 className='text-2xl font-bold'>MD. RASEL AKTAR</h1>
                        <p className='text-success text-l'>B.Sc. in Computer Science and Engineering</p>
                        <h1 className='text-xs font-bold text-blue-500'>raselcse.dev@gmail.com</h1>
                        <p>
                            <h2 className='text-xl font-bold text-accent mt-5'>Skills</h2> 
                            Firebase, React Router, React, JSON,
                            JavaScript, ES6, Tailwind, Bootstrap, CSS3,
                            HTML5
                            <h2 className='text-xl font-bold text-accent mt-5'>Tools</h2>
                            Github, Netlify, Heroku, Firebase Deploy
                        </p>
                    </div>

                    <div class="mt-5 justify-start" >
                


                <div className='font-bold'>
                    <p className='text-success text-l mt-5'>Website Link</p>
                    <Link to=''>01. Financial Foray - https://stupefied-colden-9dbc28.netlify.app/ </Link> <br />
                    <Link to=''>02. Laptop Review - https://thriving-lebkuchen-bf4cdc.netlify.app/ </Link> <br />
                    <Link to=''>03. Good Read - https://zippy-kringle-284804.netlify.app/ </Link>
                </div>
                <p className='  mt-5'>I am passionate about things related to HTML5, CSS3,
                    Bootstrap, Tailwind, JavaScript, React, and Firebase.
                    Also, a hardworking professional focused on writing
                    clean codes and learning new things. I am currently
                    searching for the right opportunity where I can work
                    in a friendly environment which will not only help me
                    to progress into full-stack role but also add value to
                    that organization.
                </p>
            </div>
                </div>


            </div>
            
        </div>
    );
};

export default PortFolio;