import React, { useState } from 'react';

import { Link } from "react-router-dom";


function SettingsProfilePage() {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1985-06-15"
  });

  const [investmentPrefs, setInvestmentPrefs] = useState({
    riskTolerance: "Moderate Risk",
    investmentGoals: "Long-term Growth",
    investmentHorizon: "3-10 years",
    monthlyCapacity: "$500 - $2,000"
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: true,
    biometricLogin: true,
    emailNotifications: false
  });

  const [linkedAccounts, setLinkedAccounts] = useState({
    autoSync: true
  });

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-40 bg-white py-5 shadow-sm">
        <div className="px-5 mb-5 flex items-center font-bold text-lg text-blue-600">
          <Link to="" className="ml-2 text-emerald-500">InvestAI</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/" className="ml-2.5">Dashboard</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/virtualtrade" className="ml-2.5">Virtual Trading</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/aiinsights" className="ml-2.5">AI Insights</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/markettrend" className="ml-2.5">Market Trends</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/portfolio" className="ml-2.5">Portfolio Management</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-blue-600 bg-blue-600 text-white">
          <Link to="/settings" className="ml-2.5">Settings</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="text-2xl mb-5 text-slate-800 font-bold">Settings & Profile</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Profile Details */}
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-lg transition-transform transition-shadow duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Profile Details</div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Full Name</label>
              <input 
                type="text" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                value={profileData.fullName}
                onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Email Address</label>
              <input 
                type="email" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Date of Birth</label>
              <input 
                type="date" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                value={profileData.dob}
                onChange={(e) => setProfileData({...profileData, dob: e.target.value})}
              />
            </div>
            
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">
              Update Profile
            </button>
          </div>
          
          {/* Investment Preferences */}
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-lg transition-transform transition-shadow duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Investment Preferences</div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Risk Tolerance</label>
              <select 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white"
                value={investmentPrefs.riskTolerance}
                onChange={(e) => setInvestmentPrefs({...investmentPrefs, riskTolerance: e.target.value})}
              >
                <option>Low Risk</option>
                <option>Moderate Risk</option>
                <option>High Risk</option>
                <option>Aggressive</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Investment Goals</label>
              <select 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white"
                value={investmentPrefs.investmentGoals}
                onChange={(e) => setInvestmentPrefs({...investmentPrefs, investmentGoals: e.target.value})}
              >
                <option>Capital Preservation</option>
                <option>Income Generation</option>
                <option>Long-term Growth</option>
                <option>Short-term Trading</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Investment Horizon</label>
              <select 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white"
                value={investmentPrefs.investmentHorizon}
                onChange={(e) => setInvestmentPrefs({...investmentPrefs, investmentHorizon: e.target.value})}
              >
                <option>Less than 1 year</option>
                <option>1-3 years</option>
                <option>3-10 years</option>
                <option>10+ years</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Monthly Investment Capacity</label>
              <select 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white"
                value={investmentPrefs.monthlyCapacity}
                onChange={(e) => setInvestmentPrefs({...investmentPrefs, monthlyCapacity: e.target.value})}
              >
                <option>$0 - $100</option>
                <option>$100 - $500</option>
                <option>$500 - $2,000</option>
                <option>$2,000+</option>
              </select>
            </div>
            
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">
              Save Preferences
            </button>
          </div>
          
          {/* Security Settings */}
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-lg transition-transform transition-shadow duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Security Settings</div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Current Password</label>
              <input 
                type="password" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                placeholder="Enter current password"
                value={securitySettings.currentPassword}
                onChange={(e) => setSecuritySettings({...securitySettings, currentPassword: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">New Password</label>
              <input 
                type="password" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                placeholder="Enter new password"
                value={securitySettings.newPassword}
                onChange={(e) => setSecuritySettings({...securitySettings, newPassword: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1.5 font-medium text-slate-800">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20" 
                placeholder="Confirm new password"
                value={securitySettings.confirmPassword}
                onChange={(e) => setSecuritySettings({...securitySettings, confirmPassword: e.target.value})}
              />
            </div>
            
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">
              Change Password
            </button>
            
            <div className="mt-5 mb-2.5 border-t border-gray-200 pt-5">
              <div className="flex items-center mb-2.5">
                <label className="relative inline-block w-11 h-6">
                  <input 
                    type="checkbox" 
                    className="opacity-0 w-0 h-0"
                    checked={securitySettings.twoFactor}
                    onChange={(e) => setSecuritySettings({...securitySettings, twoFactor: e.target.checked})}
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition-all duration-400 rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:transition-all before:duration-400 before:rounded-full checked:bg-blue-600 checked:before:translate-x-5"></span>
                </label>
                <span className="ml-2.5 text-sm text-slate-800">Enable Two-Factor Authentication</span>
              </div>
              
              <div className="flex items-center mb-2.5">
                <label className="relative inline-block w-11 h-6">
                  <input 
                    type="checkbox" 
                    className="opacity-0 w-0 h-0"
                    checked={securitySettings.biometricLogin}
                    onChange={(e) => setSecuritySettings({...securitySettings, biometricLogin: e.target.checked})}
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition-all duration-400 rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:transition-all before:duration-400 before:rounded-full checked:bg-blue-600 checked:before:translate-x-5"></span>
                </label>
                <span className="ml-2.5 text-sm text-slate-800">Biometric Login (Mobile App)</span>
              </div>
              
              <div className="flex items-center mb-2.5">
                <label className="relative inline-block w-11 h-6">
                  <input 
                    type="checkbox" 
                    className="opacity-0 w-0 h-0"
                    checked={securitySettings.emailNotifications}
                    onChange={(e) => setSecuritySettings({...securitySettings, emailNotifications: e.target.checked})}
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition-all duration-400 rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:transition-all before:duration-400 before:rounded-full checked:bg-blue-600 checked:before:translate-x-5"></span>
                </label>
                <span className="ml-2.5 text-sm text-slate-800">Email Notifications for Login Attempts</span>
              </div>
            </div>
          </div>
          
          {/* Linked Accounts */}
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-lg transition-transform transition-shadow duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Linked Accounts</div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg mb-2.5">
              <div className="flex-1">
                <div className="font-medium text-slate-800">Chase Bank</div>
                <div className="text-xs text-emerald-500">Connected • Last synced 2 hours ago</div>
              </div>
              <div className="text-sm text-blue-600 cursor-pointer hover:underline">Disconnect</div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg mb-2.5">
              <div className="flex-1">
                <div className="font-medium text-slate-800">Robinhood</div>
                <div className="text-xs text-emerald-500">Connected • Last synced 1 day ago</div>
              </div>
              <div className="text-sm text-blue-600 cursor-pointer hover:underline">Disconnect</div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg mb-2.5">
              <div className="flex-1">
                <div className="font-medium text-slate-800">Coinbase</div>
                <div className="text-xs text-emerald-500">Connected • Last synced 3 days ago</div>
              </div>
              <div className="text-sm text-blue-600 cursor-pointer hover:underline">Disconnect</div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg mb-2.5">
              <div className="flex-1">
                <div className="font-medium text-slate-800">Connect New Account</div>
                <div className="text-xs text-slate-500">Link your bank or trading account</div>
              </div>
              <div className="text-sm text-blue-600 cursor-pointer hover:underline">Connect</div>
            </div>
            
            <div className="mt-2.5">
              <div className="flex items-center mb-2.5">
                <label className="relative inline-block w-11 h-6">
                  <input 
                    type="checkbox" 
                    className="opacity-0 w-0 h-0"
                    checked={linkedAccounts.autoSync}
                    onChange={(e) => setLinkedAccounts({...linkedAccounts, autoSync: e.target.checked})}
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition-all duration-400 rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:transition-all before:duration-400 before:rounded-full checked:bg-blue-600 checked:before:translate-x-5"></span>
                </label>
                <span className="ml-2.5 text-sm text-slate-800">Auto-sync linked accounts daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsProfilePage;