import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TomatoImage from "../assets/TomatoImage.jpeg";
import potato from "../assets/potato.jpeg";
import CarrotImage from "../assets/carrot.jpeg";

const AvailableItems = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      startingBid: 500,
      quantity: "100 Kg",
      image: TomatoImage,
    },
    {
      id: 2,
      name: "Farm Fresh Potatoes",
      startingBid: 300,
      quantity: "200 Kg",
      image: potato,
    },
    {
      id: 3,
      name: "Sweet Carrots",
      startingBid: 400,
      quantity: "150 Kg",
      image: CarrotImage,
    },
  ];

  const handleBid = (item) => {
    navigate(`/auction`, { state: { item } });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5" style={{marginTop:"85px"}}>🛒 Available Items for Bidding</h2>

      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Starting Bid:</strong> ₹{item.startingBid}</p>
                <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                <button 
                  className="btn btn-success w-100" 
                  onClick={() => handleBid(item)}
                >
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableItems;