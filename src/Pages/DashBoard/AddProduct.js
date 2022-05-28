import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    /* const { data, isLoading } = useQuery('addProduct', () => fetch('https://quiet-beach-66273.herokuapp.com/product').then(res => res.json())); */

    const imgKey = 'bb53084cbcce0f9904b78c2ba013647a';

    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    orderQuantity: data.orderQuantity,
                    description: data.description,
                    img: img
                }
                fetch('https://quiet-beach-66273.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    console.log('product inserted',inserted);
                    if(inserted.insertedId){
                        toast.success('product successfully insert');
                        reset();
                    }
                    else{
                        toast.error('Failed insert product')
                    }
                })
            }
            console.log('imgbb', result);
        })
    }

    /* if (isLoading) {
        return <Loading></Loading>
    } */
    return (
        <div className='bg-info h-full'>
            <h2 className="text-2xl mt-5 pb-5 md:text-center lg:text-center font-bold text-white ">Add Product</h2>
            <div className="form-control md:mx-auto lg:mx-auto max-w-xs">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input
                            type="text"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input
                            type="text"
                            placeholder="Order Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("orderQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum order Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input
                            type="text"
                            placeholder="Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <textarea
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>

            </div>

        </div>
    );
};

export default AddProduct;