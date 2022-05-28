import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className='bg-info'>
            <h2 className='text-2xl mt-5 pb-5 lg:text-center font-bold text-white'>My Profile</h2>

            <div className='p-5'>
                <h1 className='text-2xl mt-5 font-bold text-base-300'>Md. Rasel Aktar</h1>
                <p className='pb-5 text-white'>
                    Cell no : +8801618297822 <br />
                    Email : <Link to=''>raselcse.dev@gmail.com</Link> <br />
                    Github : <Link to=''>https://github.com/raselcsedev</Link> <br />
                    LinkedIn: <Link to=''>https://www.linkedin.com/in/md-rasel1a9957174</Link>
                </p>
                <p className='pb-5 text-white'>
                    <p className='text-xl font-bold text-base-300'>Qualification - </p>
                    B.Sc. in Computer Science & Engineering, 2021 <br />
                    University of South Asia, Dhaka.
                </p>
                <p className='pb-5 text-white'>
                    <p className='text-xl font-bold text-base-300'>About Me - </p>
                    I am passionate about things related to HTML5, CSS3,
                    Bootstrap, Tailwind, JavaScript, React, and Firebase.
                    Also, a hardworking professional focused on writing
                    clean codes and learning new things. I am currently
                    searching for the right opportunity where I can work
                    in a friendly environment which will not only help me
                    to progress into full-stack role but also add value to
                    that organization.
                </p>
                <p className='pb-5 text-white'>
                    <p className='text-xl font-bold text-base-300'>Present Address - </p>
                    2i/3,Extension Pallabi <br />
                    Dhaka-1216
                </p>
                <p className='pb-5 mb-5 text-white'>
                    <p className='text-xl font-bold text-base-300'>Skills - </p>
                    Comfortable: <br />
                    MongoDB, Node.JS, Express.JS, Firebase, React Router, React, JSON, JavaScript, ES6, Tailwind, Bootstrap, CSS3, HTML5
                    <p className='text-xl font-bold text-base-300'>Tools - </p>
                    Github, Netlify, Heroku, Firebase Deploy.
                    <p className='text-xl font-bold text-base-300'>Interests - </p>
                    Typescript, Next.js, OpenCV, Machine Learning

                </p>


            </div>
        </div>
    );
};

export default MyProfile;