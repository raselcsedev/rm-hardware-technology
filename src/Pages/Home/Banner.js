import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
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
            </div>
        </div>
    );
};

export default Banner;