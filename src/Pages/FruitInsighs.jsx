import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import apple from "../assets/apple.jpeg";     
import banana from "../assets/banana.jpeg";   
import orange from "../assets/orange.jpeg";   
import grapes from "../assets/grapes.jpeg"; 
import { Link } from "react-router-dom";


const FruitInsights = () => {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-4"  style={{marginTop:"80px "}}>🍍 Fresh Fruits Insights</h2>

      <section className="bg-white p-4 rounded shadow mb-5">
        <h3>About Fresh Fruits 🍎</h3>
        <p>
          Fruits are nature's sweet and nutritious gifts, packed with essential vitamins, minerals, and fiber.
          They play a vital role in a healthy diet by providing antioxidants and natural sugars for energy.
          Popular fruits like apples, bananas, oranges, and grapes are enjoyed worldwide and come in many delicious varieties.
        </p>
      </section>

      <section>
        <h3 className="mb-4">🍇 Popular Fruits Gallery</h3>
        <div className="row g-4">

          {/* Apple */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={apple} className="card-img-top" alt="Apple" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Apple</h5>
              </div>
            </div>
          </div>

          {/* Banana */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={banana} className="card-img-top" alt="Banana" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Banana</h5>
              </div>
            </div>
          </div>

          {/* Orange */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={orange} className="card-img-top" alt="Orange" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Orange</h5>
              </div>
            </div>
          </div>

          {/* Grapes */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={grapes} className="card-img-top" alt="Grapes" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Grapes</h5>
              </div>
            </div>
          </div>

        </div>
          
      </section>

    </div>
  );
};

export default FruitInsights;