import React from 'react';
import crop from '../assets/crop.jpeg';
import fruits from '../assets/fruits.jpeg';
import vegetable from '../assets/vegetable.jpeg';
import { Link } from 'react-router-dom';

const ProductCards = () => {
  const products = [
    {
      title: "Vegetables",
      description: "Fresh and healthy vegetables from local farms.",
      imgSrc: vegetable,
      altText: "Vegetables",
      link: "/Layout/Vegetable",
    },
    {
      title: "Crops",
      description: "Seasonal crops cultivated with care and expertise.",
      imgSrc: crop,
      altText: "Crops",
      link: "/Layout/Crops",
    },
    {
      title: "Fruits",
      description: "Juicy and ripe fruits, handpicked for you.",
      imgSrc: fruits,
      altText: "Fruits",
      link: "/Layout/FruitsInsighs",
    },
  ];

  return (
    <div className="container my-5">
    <div className="row g-4" style={{ cursor: "pointer" }}>
      {products.map((product, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card h-100"
            style={{
              background: 'linear-gradient(to bottom, #0B3D0B, #A8D5A2)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
              transition: 'box-shadow 0.3s ease-in-out',
              border: 'none',
              color: 'black',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 18px 34px rgba(0, 0, 0, 0.35)';
              const img = e.currentTarget.querySelector('img');
              img.style.transform = 'scale(1.05)';  
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.25)';
              const img = e.currentTarget.querySelector('img');
              img.style.transform = 'scale(0.95)'; 
            }}
          >
            <img
              src={product.imgSrc}
              className="card-img-top object-fit-cover rounded-3 mx-auto my-1"
              alt={product.altText}
              style={{
                height: '230px',  
                width: '95%',
                transition: 'transform 0.3s ease-in-out',
                transform: 'scale(0.95)',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer bg-transparent border-top-0">
              <Link
              to={product.link} 
               className="btn w-100"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  border: '1px solid black',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'black';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductCards;