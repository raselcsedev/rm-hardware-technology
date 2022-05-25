import React from 'react';

const MyOrder = ({order}) => {
    const {productName, productImg, productQuantity, userName, userEmail, address, phone} = order;
    return (
        <div className="card my-5 lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={productImg} alt="oilPan" className="h-32 rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-xl font-bold">Product: <span className="text-accent uppercase">{productName}</span></h2>
                        <h2 className="font-bold">Quantity: <span className="text-accent">{productQuantity}pcs</span></h2>
                        
                            <h6 className=" font-bold mt-2">Name: <small className="font-bold text-accent">{userName}</small></h6>
                            <h6 className=" font-bold">Email: <small className="font-bold text-accent">{userEmail}</small></h6>
                            <h6 className="font-bold">Address: <small className="font-bold text-accent">{address}</small></h6>
                            <h6 className="font-bold">Phone: <small className="font-bold text-accent">{phone}</small></h6>
                        
                    </div>
                </div>
    );
};

export default MyOrder;