import React from 'react';
import wheat from '../assets/wheat.jpeg';
import  rice from '../assets/rice.jpeg';
import corn from '../assets/corn.jpeg'
import { Button } from 'react-bootstrap';

const AvailableCrops = () => {
  const crops = [
    {
      id: 1,
      cropName: 'Wheat',
      farmerName: 'Ram Bahadur',
      quantity: 500, 
      pricePerKg: 40,
      image : wheat,
    },
    {
      id: 2,
      cropName: 'Rice',
      farmerName: 'Sita Kumari',
      quantity: 300,
      pricePerKg: 55,
      image : rice,
    },
    {
      id: 3,
      cropName: 'Corn',
      farmerName: 'Hari Lal',
      quantity: 200,
      pricePerKg: 30,
      image : corn,
    },
  ];

  return (
    <div className="container my-5">

<h2 className="text-center mb-5" style={{ marginTop: "80px" }}>
  🌾 Available Crops Marketplace
</h2>

      <div className="row g-4">
        {crops.map((crop) => (
          <div className="col-12 col-md-4" key={crop.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">

              <img
    src={crop.image}
    alt={crop.cropName}
    className="img-fluid mb-3"
    style={{ height: '200px', objectFit: 'cover' }}
  />

                <h5 className="card-title">{crop.cropName}</h5>
                <p className="card-text">
                  <strong>Farmer:</strong> {crop.farmerName} <br />
                  <strong>Available Quantity:</strong> {crop.quantity} kg<br />
                  <strong>Price per Kg:</strong> Rs {crop.pricePerKg}
                </p>
                <h6 className="text-success mb-3">
                  Total Price: Rs {crop.quantity * crop.pricePerKg}
                </h6>
                <Button
                  variant="warning"
                  className="w-100 fw-bold"
                  onClick={() => alert(`Request sent to buy ${crop.cropName}`)}
                >
                  Request to Buy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCrops;
