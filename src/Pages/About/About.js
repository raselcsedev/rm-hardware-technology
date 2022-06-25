import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
/* import './About.css' */


const About = () => {
    const form = useRef();


    return (
        <div id="contact" className='sm:pt-10 pl-24 pb-20 bg-[#114a70] '>


            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}


<div  className=" font-ralway  text-white">
      <div className=" container font-ralway py-10">
        <div className="mb-10 ">
          <h1 className="text-5xl  font-bold  text-white">
            Contact <span className="text-orange-600">Us</span>{" "}
          </h1>
          <p className="ml-1 mt-2 text-gray-400">Get in touch with us</p>
          {/* <p className="w-full ml-1  bg-orange-500 rounded-full mt-2 h-[1px]"></p> */}
        </div>
        <div className="flex pt-12 flex-col md:flex-row">
          <div className="w-full md:w-5/12 space-y-5">
            
            <div className="text-white flex gap-4">
              <span>
                <LocationMarkerIcon className="w-8 text-orange-500" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Current Location</h2>
                <p className="text-gray-400">Dhaka, Bangladesh.</p>
                <p className="text-orange-500">Serving clients worldwide</p>
              </div>
            </div>
            <div className="text-white pt-8 flex gap-4">
              <span>
                <PhoneIcon className="w-8 text-orange-500" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">Contact with me</h2>
                <p className="text-gray-400">Email: raselcse.dev@gmail.com</p>
                <p className="text-orange-500">Phone: +880-1768297822</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;