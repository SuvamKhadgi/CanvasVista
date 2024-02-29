import { useEffect, useState } from 'react';
import Sidebar from "./adminslidebar";
import "../assets/css/admincss/createpaint.css"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'react-feather';

function Allorder() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate('/login', { replace: true })
        }
    }, [])
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8082/order/getAll');
            setItems(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:8082/order/deleteById/${id}`);
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
                                <th className='font-medium'>CartID</th>
                                <th className='font-medium'>UserID</th>
                                <th className='font-medium'>ItemID</th>
                                <th className='font-medium'>ItemName</th>
                                <th className='font-medium'>Address</th>
                                <th className='font-medium'>PhoneNO</th>
                                <th className='font-medium'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items.map((items: any) => (
                                <tr key={items.id}>
                                    <td >{items.id}</td>
                                    <td >{items.user.id}</td>
                                    <td >{items.cart.item.id}</td>
                                    <td >{items.cart.item.itemName}</td>
                                    <td >{items.address}</td>
                                    <td >{items.phone_no}</td>
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

export default Allorder;



