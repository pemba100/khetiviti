
import React from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuctionPage = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <div className="container my-5"><h3>No Product Selected for Auction 🚫</h3></div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">🌾 Farmer Product Auction</h2>

      <div className="row bg-light shadow rounded p-4 align-items-center">
        
        {/* Left: Product Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="img-fluid rounded"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Right: Product Details + Auction Form */}
        <div className="col-md-6">
          <h3>{item.name}</h3>
          <p><strong>Starting Bid:</strong> ₹{item.startingBid}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
          <p><strong>Description:</strong> Grown naturally without chemicals. Directly from farm to your kitchen!</p>

          <form>
            <div className="mb-3">
              <label className="form-label">Your Bid Amount (₹)</label>
              <input type="number" className="form-control" placeholder="Enter your bid price" />
            </div>
            <button type="submit" className="btn btn-success w-100">Place Bid</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuctionPage;
