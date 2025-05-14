import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import auctionimage from "../assets/auctionimage.jpeg"; 
import { Link } from "react-router-dom";


const AuctionPage = () => {
    const [formData, setFormData] = useState({
        cropId: "",
        total_Quantity: 0,
        price: 0,
        time: {
            hour: 0,
            minute: 0
        }
    });

    const cropOptions = ["Tomato", "Potato", "Wheat", "Rice", "Corn", "Onion", "Apple", "Banana"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "hour" || name === "minute") {
            setFormData(prev => ({
                ...prev,
                time: {
                    ...prev.time,
                    [name]: Number(value)
                }
            }));
        } else if (name === "total_Quantity" || name === "price") {
            setFormData(prev => ({
                ...prev,
                [name]: Number(value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // 👉 Connect API here
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5">🌾 Place Your Product for Auction</h2>

            <div className="row bg-light shadow rounded p-4 align-items-center">
                
                {/* Left: Product Image */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                        src={auctionimage} 
                        alt="Product" 
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                </div>

                {/* Right: Auction Form */}
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {/* Crop ID Dropdown */}
                        <div className="mb-3">
                            <label className="form-label">Crop Name</label>
                            <select 
                                className="form-select"
                                name="cropId"
                                value={formData.cropId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Crop</option>
                                {cropOptions.map((crop, idx) => (
                                    <option key={idx} value={crop}>{crop}</option>
                                ))}
                            </select>
                        </div>

                        {/* Quantity Input */}
                        <div className="mb-3">
                            <label className="form-label">Total Quantity (Kg)</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="total_Quantity"
                                value={formData.total_Quantity}
                                onChange={handleChange}
                                placeholder="Enter total quantity"
                                required
                            />
                        </div>

                        {/* Price Input */}
                        <div className="mb-3">
                            <label className="form-label">Starting Price (₹)</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter starting price"
                                required
                            />
                        </div>

                        {/* Time (Hour and Minute) Dropdown */}
                        <div className="mb-3">
                            <label className="form-label">Auction End Time</label>
                            <div className="d-flex gap-2">
                                <select 
                                    className="form-select"
                                    name="hour"
                                    value={formData.time.hour}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Hour</option>
                                    {[...Array(24).keys()].map(hour => (
                                        <option key={hour} value={hour}>{hour} hr</option>
                                    ))}
                                </select>

                                <select 
                                    className="form-select"
                                    name="minute"
                                    value={formData.time.minute}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Minute</option>
                                    {[...Array(60).keys()].map(minute => (
                                        <option key={minute} value={minute}>{minute} min</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success w-100 mt-3">Submit Product</button>

                    </form>
             
                          {/* <Link to=""  className="btn btn-primary mt-2 ">
                                <i className="bi bi-arrow-left"></i> Back
                           </Link> */}
                      
        
                               
                </div>

            </div>
        </div>
    );
};

export default AuctionPage;