import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SigninForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/login', formData);
      console.log('Login successful:', response.data);
      navigate('/userdashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In to Your Account</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Username</label>
            <input 
              name="username" 
              value={formData.username} 
              onChange={handleInputChange} 
              required 
              className="w-full p-2 border rounded" 
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Password</label>
            <input 
              name="password" 
              type="password" 
              value={formData.password} 
              onChange={handleInputChange} 
              required 
              className="w-full p-2 border rounded" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
