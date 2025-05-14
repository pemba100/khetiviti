import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Potato from "../assets/potato.jpeg";
import Carrot from "../assets/carrot.jpeg";
import Tomato from "../assets/TomatoImage.jpeg";
import { Link } from "react-router-dom";


const VegetableInsights = () => {
  return (
    <div className="container my-5 ">

      <h2 className="text-center mb-4"  style={{marginTop:"80px "}}>🌿 Fresh Vegetables Insights</h2>

      <section className="bg-white p-4 rounded shadow mb-5">
        <h3>About Fresh Vegetables 🥦</h3>
        <p>
          Fresh vegetables are a vital part of a healthy diet, providing essential vitamins, minerals, and fiber.
          They are often grown naturally without chemicals to retain their nutritional value.
          Popular vegetables like tomatoes, potatoes, carrots, and cabbages are not only delicious but also high in antioxidants and promote overall health.
        </p>
      </section>

      <section>
        <h3 className="mb-4">🌱 Popular Vegetables Gallery</h3>
        <div className="row g-4">

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={Tomato} className="card-img-top" alt="Tomato" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Tomato</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={Potato} className="card-img-top" alt="Potato" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Potato</h5>
              </div>
            </div>
          </div>

      
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img src={Carrot} className="card-img-top" alt="Carrot" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">Carrot</h5>
              </div>
            </div>
          </div>

        </div>
    
        </section>

    </div>
  );
};

export default VegetableInsights;