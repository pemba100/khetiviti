import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import nepalmap from "../assets/nepalmap.png";
import { Navbar } from 'react-bootstrap';
import "./Hero.css"
// import InquiryBox from '../components/Inquiry';

const Hero = () => {
  const [districtDetails, setDistrictDetails] = useState(null);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const districts = [
    { name: 'Bhojpur', top: '65%', left: '85%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dhankuta', top: '62%', left: '83%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Ilam', top: '60%', left: '88%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Jhapa', top: '55%', left: '90%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Khotang', top: '68%', left: '82%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Morang', top: '58%', left: '85%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Okhaldhunga', top: '67%', left: '80%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Panchthar', top: '62%', left: '87%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Sankhuwasabha', top: '63%', left: '84%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Solukhumbu', top: '70%', left: '78%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Sunsari', top: '56%', left: '83%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Taplejung', top: '65%', left: '89%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Terhathum', top: '64%', left: '85%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Udayapur', top: '63%', left: '78%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Province 2
    { name: 'Bara', top: '70%', left: '60%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Parsa', top: '72%', left: '58%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dhanusha', top: '68%', left: '65%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Mahottari', top: '69%', left: '63%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rautahat', top: '71%', left: '62%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Saptari', top: '65%', left: '70%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Sarlahi', top: '70%', left: '65%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Siraha', top: '67%', left: '72%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Bagmati Province
    { name: 'Bhaktapur', top: '65%', left: '70%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Chitwan', top: '72%', left: '55%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dhading', top: '68%', left: '65%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dolakha', top: '70%', left: '72%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kathmandu', top: '66%', left: '68%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kavrepalanchok', top: '67%', left: '70%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Lalitpur', top: '67%', left: '67%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Makwanpur', top: '73%', left: '60%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Nuwakot', top: '65%', left: '67%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Ramechhap', top: '72%', left: '72%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rasuwa', top: '63%', left: '65%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Sindhuli', top: '70%', left: '68%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Sindhupalchok', top: '65%', left: '72%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Gandaki Province
    { name: 'Baglung', top: '75%', left: '60%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Gorkha', top: '68%', left: '62%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kaski', top: '72%', left: '58%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Lamjung', top: '70%', left: '60%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Manang', top: '65%', left: '55%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Mustang', top: '60%', left: '50%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Myagdi', top: '73%', left: '58%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Nawalpur', top: '75%', left: '55%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Parbat', top: '74%', left: '62%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Syangja', top: '72%', left: '60%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Tanahu', top: '70%', left: '58%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Province 5
    { name: 'Arghakhanchi', top: '80%', left: '50%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Banke', top: '85%', left: '40%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Bardiya', top: '87%', left: '35%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dang', top: '82%', left: '45%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Gulmi', top: '78%', left: '55%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kapilvastu', top: '82%', left: '50%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Palpa', top: '78%', left: '52%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Pyuthan', top: '80%', left: '55%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rolpa', top: '82%', left: '52%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rukum East', top: '78%', left: '50%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rupandehi', top: '80%', left: '48%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Karnali Province
    { name: 'Dailekh', top: '75%', left: '45%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dolpa', top: '70%', left: '40%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Humla', top: '65%', left: '35%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Jajarkot', top: '78%', left: '48%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Jumla', top: '72%', left: '42%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kalikot', top: '75%', left: '45%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Mugu', top: '68%', left: '38%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Rukum West', top: '76%', left: '48%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Salyan', top: '80%', left: '50%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Surkhet', top: '78%', left: '45%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },

    // Sudurpashchim Province
    { name: 'Achham', top: '82%', left: '30%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Baitadi', top: '78%', left: '25%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Bajhang', top: '75%', left: '22%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Bajura', top: '72%', left: '25%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Dadeldhura', top: '80%', left: '28%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Darchula', top: '75%', left: '20%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Doti', top: '82%', left: '32%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kailali', top: '85%', left: '30%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
    { name: 'Kanchanpur', top: '83%', left: '25%', farmers: getRandomNumber(500, 5000), buyers: getRandomNumber(50, 500) },
  ];
  

  const handleDistrictClick = (district) => {
    setDistrictDetails(district);
  };

  return (
    <>
      <Navbar />
      <div className="container text-center my-5 position-relative" style={{ maxWidth: '800px' }}>
      <h2 className="mb-2" style={{ marginTop:"60px"}}>Nepal Agricultural Marketplace</h2>

        <div className="position-relative">
          <img src={nepalmap} alt="Map of Nepal" className="img-fluid w-100" style={{ border: '1px solid #ddd', borderRadius: '8px' }} />
          <div className='aaa2'>
          {districts.map((district, index) => (
            <div
              key={index}
              onClick={() => handleDistrictClick(district)}
              style={{
                position: 'absolute',
                top: district.top,
                left: district.left,
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                borderRadius: '50%',
                border: '2px solid red',
              }}
              className='aaa'
            />
          ))}
        </div>
        </div>
        {districtDetails && (
          <div className="mt-4">
            <h3>District Details</h3>
            <p><strong>District:</strong> {districtDetails.name}</p>
            <p><strong>Farmers:</strong> {districtDetails.farmers}</p>
            <p><strong>Buyers:</strong> {districtDetails.buyers}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;

