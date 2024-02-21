import React, { useEffect, useState } from 'react';
import Sidebar from "../admin/adminslidebar";
import "../assets/css/admincss/createpaint.css"
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { register } from 'swiper/element';

function CreateCardForm() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            //   alert('PLEASE LOGIN')
            navigate('/login', { replace: true })
        }
    }, [])

    const apiCall = useMutation({
        mutationKey: ["POST_ITEM"],
        mutationFn: async (formData) => {
            try {
                const response = await axios.post('http://localhost:8082/item/save', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                    },
                });
                return response.data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        },
    })
    const { register, handleSubmit } = useForm({
        // values: id_p ? dataById?.data : {},
    });
    const onSubmit = (data, e) => {
        const formData = new FormData();
        formData.append('itemName', data.itemName);
        formData.append('itemDescription', data.itemDescription);
        formData.append('itemQuantity', data.itemQuantity);
        formData.append('itemPerPrice', data.itemPerPrice);
        formData.append('itemImage', data.itemImage[0]); // Assuming itemImage is a file input
        // formData.append('brandName', data.brandName);
        formData.append('itemCategory', data.categoryName);
        if (Object.values(data).some((value) => !value)) {
            toast.error('Please fill all the fields!');
            // } else if (!data.brandName) {
            //     toast.error('Please select a brand!');
        } else if (!data.categoryName) {
            toast.error('Please select a category!');
        } else {
            apiCall.mutate(formData);
            toast.success('Product added successfully!');
            // e.target.reset();
        }
    };
    return (
        <div className=" flex">
            <div className="">
                <Sidebar />
            </div>
            <div className=" text-3xl ml-8">
                <h2 className="font-semibold text-center mb-8 mt-8">ADD PAINTING</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=" flex mb-11">
                        <input className="input5 mr-1" type="text" placeholder="TITLE" {...register("itemName")} />
                        <input className="input5 mr-1" type="textarea" placeholder="DETAIL" {...register("itemDescription")} />
                        <input className="input5 max-w-80 mr-1" type="file" accept="image/*" required {...register("itemImage")} />

                    </div>
                    <div className="flex ">
                        <input className="input5 mr-1 " {...register("itemQuantity")} type="text" placeholder="QUANTITY" />

                        <input className="input5 mr-1" {...register("itemPerPrice")} type="text" placeholder="PER-PRICE" />

                        <select id="category" {...register("categoryName")} className="border border-solid border-gray-400 rounded-3xl p-1">
                            <option value="canvas-painting">canvas-painting</option>
                            <option value="nepali-painting">nepali-painting</option>
                            <option value="digital-painting">digital-painting</option>
                            <option value="acyric-painting">acyric-painting</option>
                            <option value="oil-painting">oil-painting</option>
                            <option value="watercolor-painting">watercolor-painting</option>
                            <option value="og-painting">og-painting</option>
                            <option value="handmade-painting">handmade-painting</option>
                        </select>
                        {/* <button type="submit"  className="relative overflow-hidden ml-4 z-10 inline-flex items-center justify-center w-36 h-12 rounded-full shadow-md font-medium text-base text-center text-white bg-gradient-to-r from-green-400 to-yellow-400 focus:outline-none transition-all duration-500 ease-in-out hover:w-36 hover:bg-yellow-400">ADD</button> */}

                        <button
                            type="submit"
                            className="relative overflow-hidden ml-4 z-10 inline-flex items-center justify-center w-36 h-12 rounded-full shadow-md font-medium text-base text-center text-white bg-gradient-to-r from-green-400 to-yellow-400 focus:outline-none transition-all duration-500 ease-in-out hover:w-36 hover:bg-yellow-400"
                            onClick={() => console.log('Button clicked!')}
                        > ADD</button>

                    </div>
                </form>
                <ToastContainer autoClose={1000} />
            </div>
        </div>

    );
};

export default CreateCardForm;