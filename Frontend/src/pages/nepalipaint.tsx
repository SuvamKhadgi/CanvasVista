import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../assets/css/cardcomponent.css';

import Navbar from "../components/navbar";
// import CardComponent from '../components/cardcomponent';
// import CreateCardForm from '../admin/createpaint';
import axios from 'axios';

const Nepalipainting: React.FC = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('nepali-painting');
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


  return (
    <>
      <Header />
      <div className="containers123 flex ">
        <div className="navvbaar">
          <Navbar />
        </div>
        <div className="w-11/12 ml-32 mr-8  mt-20">
          <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4">
            CANVAS PAINTAING
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
                    <p className="title">{item.itemName}</p>
                    <p>{item.itemDescription}</p>
                    <p>Quantity: {item.itemQuantity}</p>
                    <p>Price: RS.{item.itemPerPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nepalipainting;
