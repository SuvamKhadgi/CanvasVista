import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../assets/css/cardcomponent.css';
import { ShoppingCart, PlusCircle, MinusCircle } from 'react-feather';
import Navbar from "../components/navbar";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Acyricpaint: React.FC = () => {
  const [items, setItems] = useState([]);
  const userId = localStorage.getItem('id');
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      // navigate('/login', { replace: true })
      toast.error('Please LOGIN ');

    }
  }, [])
  const [category, setCategory] = useState('acyric-painting');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/item/getAll');
      // setItems(response.data);
      setItems(response.data.filter((item: any) => item.itemCategory === category));

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleAddToCart = async (itemId) => {
    try {
      const response = await axios.post('http://localhost:8082/cart/save', {
        itemId: itemId,
        cartId: userId,
        userId: userId,
        itemQuantity: quantities[itemId] || 1
      });
      console.log('Item added to cart:', response.data);
      toast.success("successfull added item to your cart")
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast.error("Faild To Add Item ");
    }
  };


  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const handleIncrease = (itemId: string) => {
    const item = items.find((item: any) => item.id === itemId);
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
      <div className="containers123 flex ">
        <div className="navvbaar">
          <Navbar />
        </div>
        <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
          <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4">
            ACYRIC PAINTAING
          </h1>
          <br />
          <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {items.map((item: any) => (
              <div className="flip-card" key={item.id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img style={{ height: '100%', borderRadius: "1rem" }} src={`data:image/jpeg;base64,${item.itemImage}`} alt={item.name} />
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
          </div>
        </div>
        <ToastContainer
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
    </>
  );
};

export default Acyricpaint;
