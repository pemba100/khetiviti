import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import farmer from "../assets/logo.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="fixed-top navbar-container text-white navbar-expand-lg justify-content-between bg-success d-flex py-2 px-3">
            <div className="d-flex align-items-center" style={{ width: "50px", height: "50px" }}>
                {/* <img src={farmer} alt="Logo" className="img-fluid rounded-circle" style={{ objectFit: "cover", width: "100%", height: "100%" }} /> */}

                <Link to="/dashboard" style={{ width: "100%", height: "100%" }}>
                    <img
                        src={farmer}
                        alt="Logo"
                        className="img-fluid rounded-circle"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </Link>

            </div>

            <div className="d-flex align-items-center gap-3">
             

                <Link to="/Layout/Viewpage" className="fs-5 text-decoration-none text-white">
                      Upload Crop
                  </Link>
                  <Link to="/Layout/avc" className="fs-5 text-decoration-none text-white">
                      Available Crop
                  </Link>
                  <Link to="/Layout/availablebid" className="fs-5 text-decoration-none text-white">
                      Available bid
                  </Link>
                 
                <span className="fs-5  ">Admin</span> 
                
                <Link to="/notifications" className="text-white">
                    <FaBell className="fs-5" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;