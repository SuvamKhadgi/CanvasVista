import { useEffect, useState } from 'react';
import Sidebar from "./adminslidebar";
import "../assets/css/admincss/createpaint.css"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'react-feather';

function Allitems() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            //   alert('PLEASE LOGIN')
            navigate('/login', { replace: true })
        }
    }, [])
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/item/getAll');
            setItems(response.data);
            //   setItems(response.data.filter((item: any) => item.itemCategory === category));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:8082/item/deleteById/${id}`);
            setItems(items.filter(item => item.id !== id));
            toast.success('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Failed to delete item');
        }
    };

    return (
        <div className=" flex">
            <div className="">
                <Sidebar />
            </div>
            <div className=" text-3xl ml-8 w-full">
                <h2 className="font-semibold text-center mb-8 mt-8">ALL Items</h2>

                <div className='itemstbl w-full'>
                    <table className="neumorphic w-full">
                        <thead>
                            <tr>
                                <th className='font-medium'>ID</th>
                                <th className='font-medium'>ItemName</th>
                                <th className='font-medium'>Image</th>
                                <th className='font-medium'>Description</th>
                                <th className='font-medium'>Categories</th>
                                <th className='font-medium'>Quantity</th>
                                <th className='font-medium'>Price</th>
                                <th className='font-medium'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items.map((items: any) => (
                                <tr key={items.id}>
                                    <td >{items.id}</td>
                                    <td >{items.itemName}</td>
                                    <td ><img style={{ height: '200px' }} src={`data:image/jpeg;base64,${items.itemImage}`}></img></td>
                                    <td >{items.itemDescription}</td>
                                    <td >{items.itemCategory}</td>
                                    <td >{items.itemQuantity}</td>
                                    <td >{items.itemPerPrice}</td>
                                    <td>
                                        <button className='rounded-2xl' onClick={() => handleDelete(items.id)}><Trash2 /></button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <ToastContainer autoClose={1000} />
            </div>
        </div >

    );
};

export default Allitems;



