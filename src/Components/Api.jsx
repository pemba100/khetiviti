import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://192.168.1.26:7052/api/Auth/Login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Login</h3>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>

      {response && <div className="alert alert-success mt-3">Success: {JSON.stringify(response)}</div>}
      {error && <div className="alert alert-danger mt-3">Error: {JSON.stringify(error)}</div>}
    </div>
  );
};

export default LoginForm;