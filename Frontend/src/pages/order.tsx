// import React, { useEffect, useState } from "react";
// import "../assets/css/Home.css";
// import Header from "../components/Header";
// import Navbar from "../components/navbar";
// import axios from "axios";
// import { Trash2 } from "react-feather";
// import { toast } from "react-toastify";
// import "../assets/css/admincss/createpaint.css"
// import { ShoppingBag } from "react-feather";

// const Ordercart: React.FC = () => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const userId = localStorage.getItem('id');
//             if (userId) {
//                 const response = await axios.get(`http://localhost:8082/cart/getByUserId/${userId}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ` + localStorage.getItem('accessToken') // Include the bearer token in the request headers
//                         }
//                     });
//                 setItems(response.data);

//             }
//         } catch (error) {
//             console.error('Error fetching user details:', error);
//         }
//     };

//     const calculateTotalAmount = (items: any[]) => {
//         let totalAmount = 0;
//         items.forEach(item => {
//             totalAmount += item.itemQuantity * item.item.itemPerPrice;
//         });
//         return totalAmount;
//     };

//     const handleDelete = async (id: any) => {
//         try {
//             await axios.delete(`http://localhost:8082/cart/deleteById/${id}`);
//             setItems(items.filter(item => item.id !== id));
//             toast.success('Item deleted successfully');
//         } catch (error) {
//             console.error('Error deleting item:', error);
//             toast.error('Failed to delete item');
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div className="containers123">
//                 <div className="navvbaar">
//                     <Navbar />
//                 </div>
//                 <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
//                     <h1 style={{ marginBottom: "70px", marginTop: "36px" }} className=" text-3xl font-bold text-center bg-white pt-6 pb-4">YOUR ORDER LIST ITEMS</h1>
//                     <div className="flex">
//                         <div className='itemstbl w-full'>
//                             <table className="neumorphic w-full">
//                                 <thead>
//                                     <tr>
//                                         <th className='font-medium'>ID</th>
//                                         <th className='font-medium'>ItemName</th>
//                                         <th className='font-medium'>Description</th>
//                                         <th className='font-medium'>Quantity</th>
//                                         <th className='font-medium'>Price</th>
//                                         <th className='font-medium'>Actions</th>

//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {items.map((items: any) => (
//                                         <tr key={items.id}>
//                                             <td >{items.id}</td>
//                                             <td >{items.item.itemName}</td>
//                                             {/* <td ><img style={{ height: '200px' }} src={items.item.itemImage}></img></td> */}
//                                             <td>{items.item.itemDescription}</td>

//                                             <td >{items.itemQuantity}</td>
//                                             <td >{items.item.itemPerPrice}</td>
//                                             <td>
//                                                 <button className='rounded-2xl' onClick={() => handleDelete(items.id)}><Trash2 /></button>
//                                             </td>

//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="odrbx">
//                             <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4"> ORDER NOW</h1>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th className='font-medium'>Name</th>
//                                         <th className='font-medium'>Quantity</th>
//                                         <th className='font-medium'>PER-Price</th>
//                                         <th className='font-medium'>Total-Price</th>

//                                     </tr>
//                                 </thead><tbody>
//                                     {items.map((items: any) => (
//                                         <tr key={items.id}>
//                                             <td >{items.item.itemName}</td>
//                                             <td >{items.itemQuantity}</td>
//                                             <td >{items.item.itemPerPrice}</td>
//                                             <td >{items.itemQuantity * items.item.itemPerPrice}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody> <tfoot>
//                                     <tr>
//                                         <td colSpan={3} className="text-right font-medium">Total Amount:</td>
//                                         <td>{calculateTotalAmount(items)}</td>
//                                     </tr>
//                                 </tfoot></table>
//                             <button style={{ backgroundColor: "#5ce467", borderRadius: "1rem", display: "flex", padding: "15px" }}>PLACE AN ORDER NOW<ShoppingBag /></button>

//                         </div></div>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default Ordercart;



import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import axios from "axios";
import { Trash2 } from "react-feather";
import { toast } from "react-toastify";
import "../assets/css/admincss/createpaint.css"
import { ShoppingBag } from "react-feather";

const Ordercart: React.FC = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const userId = localStorage.getItem('id');
            if (userId) {
                const response = await axios.get(`http://localhost:8082/cart/getByUserId/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ` + localStorage.getItem('accessToken') // Include the bearer token in the request headers
                        }
                    });
                setItems(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const calculateTotalAmount = (items: any[]) => {
        let totalAmount = 0;
        items.forEach(item => {
            totalAmount += item.itemQuantity * item.item.itemPerPrice;
        });
        return totalAmount;
    };

    const handleDelete = async (id: any) => {
        try {
            await axios.delete(`http://localhost:8082/cart/deleteById/${id}`);
            setItems(items.filter(item => item.id !== id));
            toast.success('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Failed to delete item');
        }
    };

    const handlePlaceOrder = async () => {
        try {
            const userId = localStorage.getItem('id');
            if (userId) {
                for (const item of items) {
                    const orderData = {
                        userId: userId,
                        address: address,
                        phone_no: phone,
                        cartId: item.id,
                    };

                    const response = await axios.post(`http://localhost:8082/order/save`, orderData, {
                        headers: {
                            Authorization: `Bearer ` + localStorage.getItem('accessToken')
                        }
                    });

                    // Assuming the response data contains something meaningful
                    console.log('Order placed successfully:', response.data);
                    // You might want to clear the cart or perform other actions upon successful order placement
                }

                // Close the modal after placing all orders
                setShowModal(false);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };


    return (
        <>
            <Header />
            <div className="containers123">
                <div className="navvbaar">
                    <Navbar />
                </div>
                <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
                    <h1 style={{ marginBottom: "70px", marginTop: "36px" }} className=" text-3xl font-bold text-center bg-white pt-6 pb-4">YOUR ORDER LIST ITEMS</h1>
                    <div className="flex">
                        <div className='itemstbl w-full'>
                            <table className="neumorphic w-full">
                                <thead>
                                    <tr>
                                        <th className='font-medium'>ID</th>
                                        <th className='font-medium'>ItemName</th>
                                        <th className='font-medium'>Description</th>
                                        <th className='font-medium'>Quantity</th>
                                        <th className='font-medium'>Price</th>
                                        <th className='font-medium'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item: any) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.item.itemName}</td>
                                            <td>{item.item.itemDescription}</td>
                                            <td>{item.itemQuantity}</td>
                                            <td>{item.item.itemPerPrice}</td>
                                            <td>
                                                <button className='rounded-2xl' onClick={() => handleDelete(item.id)}><Trash2 /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="odrbx">
                            <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4"> ORDER NOW</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='font-medium'>Name</th>
                                        <th className='font-medium'>Quantity</th>
                                        <th className='font-medium'>PER-Price</th>
                                        <th className='font-medium'>Total-Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item: any) => (
                                        <tr key={item.id}>
                                            <td>{item.item.itemName}</td>
                                            <td>{item.itemQuantity}</td>
                                            <td>{item.item.itemPerPrice}</td>
                                            <td>{item.itemQuantity * item.item.itemPerPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3} className="text-right font-medium">Total Amount:</td>
                                        <td>{calculateTotalAmount(items)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button style={{ backgroundColor: "#5ce467", borderRadius: "1rem", display: "flex", padding: "15px" }} onClick={() => setShowModal(true)}>PLACE AN ORDER NOW<ShoppingBag /></button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close" style={{ display: "flex", flexDirection: "row-reverse" }} onClick={() => setShowModal(false)}>&times;</span>
                        <h2>FILL THIS FORM TO ORDER</h2>
                        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                        <button onClick={handlePlaceOrder}>Order</button>
                    </div>
                </div>
            )}

        </>
    );
};

export default Ordercart;
