import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <div className="card w-full mb-5 lg:card-side bg-base-100 justify-center shadow-xl">
                <div className="card-body">
                <h1 className='text-2xl font-bold text-success text-center'>Business Summary</h1>
                    <p>We are from a RM HardWare technology, Dhaka. The company started manufacturing up-market minium alloy the bicycle parts, now it extends to PBT, such as cellphone and computers shell, TV backet, Loudspeaker box and so on gradually. Besides PBT, we produce sports equipment parts, like electric motor car, scooter, motorbike, automobile and robot, and we also make medical instruments, aerospace equipment, Including parts of daily used hardware, finishing of CNC, shining metal and EDM. Our Company introduces advanced production and testing facilities, manufacturing proces. At the meantime, we promote the system of 6S and PDCA and our lean management becomes more systematical, carrying ISO9001 strictly. We have adopted TS16849 qualified management system since 2021.</p>

                    <div className='text-xl'>
                    <h3>Business Type: <small className='text-primary'>Manufacturer</small></h3>
                    <h3>Main Products: <small className='text-primary'> E-car Parts, Bicycle Accessories...</small></h3>
                    <h3>Business Range: <small className='text-primary'>Auto, Motorcycle Parts and Accessories, Manufacturing and Processing Machinery</small></h3>
                    </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 mb-0 pb-0 mt-3 lg:grid-cols-3'>
                     <figure><img style={{height:'200px', width:'400px'}} className="w-full" src="https://e7.pngegg.com/pngimages/865/623/png-clipart-carparts-com-w-s-auto-repairs-sunbury-auto-detailing-preservation-and-restoration-of-automobiles-car-angle-truck.png" alt="car!"/> </figure>
                    <figure><img style={{height:'200px', width:'400px'}} className="w-full" src="https://www.simexs.com/images/bi-cycle-and-motor-cycle-parts.jpg" alt="cycle!"/> </figure> 
                    <figure><img style={{height:'200px', width:'400px'}} className="w-full" src="https://w7.pngwing.com/pngs/117/400/png-transparent-spark-plugs-automotive-engine-parts-car-parts-auto-parts.png" alt="car!"/> </figure> 
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;