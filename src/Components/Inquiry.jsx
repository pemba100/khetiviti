import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import inquiryimage from "../assets/inquiryimage.png"; 

const InquiryBox = () => {
    return (
        <div className="container my-5">
            <div className="row bg-light shadow rounded p-4 align-items-center">
                
                {/* Left Side: Image */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                        src={inquiryimage} 
                        alt="Inquiry" 
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                </div>

                {/* Right Side: Form */}
                <div className="col-md-6">
                    <h3 className="mb-4">Inquiry Form</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Send Inquiry</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default InquiryBox;