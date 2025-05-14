import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import wheat from "../assets/wheat.jpeg";    
import corn from "../assets/corn.jpeg";      
import barleey from "../assets/barleey.jpeg";  
import { Link } from "react-router-dom";

const Crops = () => {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-4" style={{marginTop:"80px "}}>Fresh Crops Insights</h2>

      <section className="bg-white p-4 rounded shadow mb-5">
        <h3>About Fresh Crops</h3>
        <p>
          Crops are cultivated plants grown on a large scale for food, fiber, and other products.
          They play a critical role in sustaining life by providing essential carbohydrates, proteins, and nutrients.
          Major crops like wheat, rice, corn, and barley are harvested across the world and form the backbone of agriculture.
        </p>
      </section>

      <section>
        <h3 className="mb-4">Popular Crops Gallery</h3>
        <div className="row g-4">

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={wheat} className="card-img-top" alt="Wheat" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Wheat</h5>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={corn} className="card-img-top" alt="Corn" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Corn</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={barleey} className="card-img-top" alt="Barley" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Barley</h5>
              </div>
            </div>
          </div>

        </div>

        
      </section>

    </div>
  );
};

export default Crops;