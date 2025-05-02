import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('step1');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    riskAppetite: 'Medium',
    experience: 'Beginner',
    goals: [],
    preferredAssets: ['Stocks'],
    annualIncome: '',
    investmentBudget: '',
    taxBracket: '',
    termsAgreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'terms') {
        setFormData((prev) => ({ ...prev, termsAgreed: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/login', { state: { message: 'Account created successfully!' } });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const goToStep = (step) => setCurrentStep(step);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {currentStep === 'step1' && (
            <>
              <div className="mb-4">
                <label className="block font-semibold">Full Name</label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Username</label>
                <input name="username" value={formData.username} onChange={handleInputChange} required className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleInputChange} required className="w-full p-2 border rounded"/>
              </div>
              <button type="button" onClick={() => goToStep('step2')} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Next</button>
            </>
          )}

          {currentStep === 'step2' && (
            <>
              <div className="mb-4">
                <label className="block font-semibold">Risk Appetite</label>
                <select name="riskAppetite" value={formData.riskAppetite} onChange={handleInputChange} className="w-full p-2 border rounded">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Experience Level</label>
                <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full p-2 border rounded">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => goToStep('step1')} className="bg-gray-400 text-white p-2 rounded">Back</button>
                <button type="button" onClick={() => goToStep('step3')} className="bg-blue-500 text-white p-2 rounded">Next</button>
              </div>
            </>
          )}

          {currentStep === 'step3' && (
            <>
              <div className="mb-4">
                <label className="block font-semibold">Annual Income</label>
                <input name="annualIncome" type="number" value={formData.annualIncome} onChange={handleInputChange} className="w-full p-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Investment Budget</label>
                <input name="investmentBudget" type="number" value={formData.investmentBudget} onChange={handleInputChange} className="w-full p-2 border rounded"/>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => goToStep('step2')} className="bg-gray-400 text-white p-2 rounded">Back</button>
                <button type="submit" className="bg-green-500 text-white p-2 rounded" disabled={isLoading}>{isLoading ? 'Creating Account...' : 'Submit'}</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;