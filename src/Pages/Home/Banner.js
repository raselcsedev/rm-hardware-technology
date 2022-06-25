import React from 'react';

const Banner = () => {
    return (
        <div>

            <div class="hero lg:pb-52 bg-[#114a70]">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="https://www.ptc.com/-/media/Images/Redesign/SLM/SPM_MainImage_475x500.png?h=500&w=475&la=en&hash=474328F7CBDBBFED91A25AB1C25C2616?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='lg:pl-12 mb-12 lg:mb-0'
                    >
                        <img src="https://www.ptc.com/-/media/Images/Redesign/SLM/SPM_MainImage_475x500.png?h=500&w=475&la=en&hash=474328F7CBDBBFED91A25AB1C25C2616?w=260&h=400" class=" rounded-lg shadow-2xl" alt='banner' />
                    </div>
                    <div>
                        <h1 class="text-4xl text-success lg:ml-8 font-bold sm: text-center">RM Engineering</h1>
                        <h1 class="text-4xl text-success lg:ml-8 font-bold sm: text-center">Technology</h1>
                        <p class="py-6 text-2xl text-white ml-8 font-bold sm: text-center">It is a manufacturing company website. <br /> Find the perfect car parts for you today.  </p>

                    </div>
                </div>
            </div>
            {/* <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://w7.pngwing.com/pngs/1009/41/png-transparent-automotive-engine-parts-automotive-engine-parts-car-parts-auto-parts.png" style={{height:'450px', width:'1000px'}} className="w-full mx-auto" alt="" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-a-set-of-motorcycle-parts-png-image_4173409.jpg" style={{height:'450px', width:'1000px'}} className="w-full mx-auto" alt="" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://c0.klipartz.com/pngpicture/530/606/gratis-png-partes-de-motor-automotriz.png" style={{height:'450px', width:'1000px'}} className="w-full mx-auto" alt="" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://e7.pngegg.com/pngimages/630/798/png-clipart-vehicle-part-lot-illustration-car-brake-pad-tire-auto-parts-material-brakes-tires-happy-birthday-vector-images-motorcycle.png" style={{height:'450px', width:'1000px'}} className="w-full mx-auto" alt="" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div> */}
        </div>
    );
};

export default Banner;