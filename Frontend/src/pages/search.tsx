import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import { Search, ShoppingCart, MinusCircle, PlusCircle } from "react-feather";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import '../assets/css/cardcomponent.css';
import { ToastContainer, toast } from "react-toastify";


interface Item {
    id: string;
    itemName: string;
    itemDescription: string;
    itemPerPrice: number;
    itemQuantity: number;
    itemImage: string;
}

const Searchproduct: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const userId = localStorage.getItem('id');
    const [searchData, setSearchData] = useState<string | undefined>();

    const { data: searchByName, refetch, isError } = useQuery({
        queryKey: ["SEARCHBYNAME"],
        queryFn: async () => {
            try {
                const response = await axios.get("http://localhost:8082/item/searchByName/" + searchData);
                if (!response.data || ) {
                    toast.error("SORRY, NO DATA FOUND")
                    throw new Error('No data returned from the server');
                }
                return response.data;
            } catch (error) {
                toast.error("ERROR FECTING DATA FROM SERVER")
                throw new Error('Error fetching data: ' + error.message);

            }
        },
    });
    useEffect(() => {
        if (searchByName) {
            setItems(searchByName);
        }
    }, [searchByName]);


    const handleSearch = () => {
        refetch();
    };

    const handleAddToCart = async (itemId: string) => {
        try {
            const response = await axios.post('http://localhost:8082/cart/save', {
                itemId: itemId,
                userId: userId,
                itemQuantity: quantities[itemId] || 1
            });
            console.log('Item added to cart:', response.data);
            toast.success(`ADDED TO CART`);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            toast.error(`FAILED ADDING ITEM TO CART `);
        }
    };


    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const handleIncrease = (itemId: string) => {
        const item = items.find(item => item.id === itemId);
        if (item) {
            const currentQuantity = quantities[itemId] || 0;
            if (currentQuantity < item.itemQuantity) {
                setQuantities({ ...quantities, [itemId]: currentQuantity + 1 });
            }
        }
    };

    const handleDecrease = (itemId: string) => {
        if (quantities[itemId] && quantities[itemId] > 1) {
            setQuantities({ ...quantities, [itemId]: quantities[itemId] - 1 });
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
                    <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4">
                        SEARCH ANY PAINTING
                    </h1>
                    <label className="label789 flex">
                        <input className="input789 " style={{ marginLeft: "40px" }} type="text" name="search" placeholder="SEARCH PRODUCTS" onChange={(e) => { setSearchData(e.target.value); }} />
                        <button className="button78 flex" onClick={handleSearch} style={{ color: "black", width: "160px" }} type="button"><Search />
                        </button>
                    </label>



                    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {items && items.map(item => (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img style={{ height: '100%', borderRadius: "1rem" }} src={`data:image/jpeg;base64,${item.itemImage}`} alt={item.itemName} />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="ad-cart" style={{ textAlign: "end" }}>
                                            <button onClick={() => handleAddToCart(item.id)} style={{ borderRadius: '1rem', backgroundColor: "rgba(255, 0, 0, 0.3)", padding: "9px" }}><ShoppingCart /></button>
                                        </div>
                                        <p className="title">{item.itemName}</p>
                                        <p>{item.itemDescription}</p>
                                        <p>Price: RS.{item.itemPerPrice}</p>
                                        <h2>Quantity Available: {item.itemQuantity}</h2>
                                        <div>
                                            <button className="mr-8" onClick={() => handleDecrease(item.id)}><MinusCircle /></button>
                                            <span>{quantities[item.id] || 1}</span>
                                            <button className="ml-8" onClick={() => handleIncrease(item.id)}><PlusCircle /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition:Bounce
                    />
                </div>

            </div >
        </>
    );
};

export default Searchproduct;
