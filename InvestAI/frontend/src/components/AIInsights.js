import React from 'react';

import { Link } from "react-router-dom";


const AIInsightsPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-40 bg-white py-5 shadow">
        <div className="px-5 mb-5 flex items-center font-bold text-lg text-blue-600">
          <Link className="text-emerald-500">InvestAI</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link to="/" className="ml-2.5">Dashboard</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link to="/virtualtrade" className="ml-2.5">Virtual Trading</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-emerald-500 bg-blue-600 text-white transition-all duration-300 ease-in-out">
          <Link to="/aiinsights" className="ml-2.5">AI Insights</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link To="/markettrend" className="ml-2.5">Market Trends</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link to="/portfolio" className="ml-2.5">Portfolio Management</Link>
        </div>
        
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link to="/settings" className="ml-2.5">Settings</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="text-2xl mb-5 text-slate-800 font-bold">AI Insights</div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
          <div className="mb-4 text-lg font-semibold text-slate-800">Your AI-Powered Investment Coach</div>
          <p className="text-slate-500 mb-4">Welcome Devika Yadav. Your AI assistant has analyzed your recent trading activity and portfolio performance to provide personalized insights and recommendations.</p>
          <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
            <div className="text-sm text-slate-500">AI Confidence Score</div>
            <div className="text-base font-medium text-slate-800">78/100</div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded mt-2">
            <div className="h-full bg-blue-600 rounded" style={{ width: '78%' }}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Emotional Trading Detector</div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Current Emotional State</div>
              <div className="text-base font-medium text-amber-500">Slightly Anxious</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Impulsive Trades (Last 30 Days)</div>
              <div className="text-base font-medium text-slate-800">3</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Trading Pattern</div>
              <div className="text-base font-medium text-slate-800">FOMO Detected</div>
            </div>
            <p className="text-slate-500 mb-4">Our AI has detected potential emotional trading patterns. Consider pausing before your next trade to evaluate your decision rationally.</p>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">View Detailed Analysis</button>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Portfolio Risk Analysis</div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Overall Risk Level</div>
              <div className="text-base font-medium text-amber-500">Moderate</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Tech Sector Exposure</div>
              <div className="text-base font-medium text-red-500">67% (Overexposed)</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Diversification Score</div>
              <div className="text-base font-medium text-slate-800">62/100</div>
            </div>
            <p className="text-slate-500 mb-4">Your portfolio shows high concentration in tech stocks. Consider diversifying into other sectors to reduce risk.</p>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">Get Diversification Recommendations</button>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Performance Comparison</div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Your Portfolio (YTD)</div>
              <div className="text-base font-medium text-emerald-500">+7.8%</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">S&P 500 (YTD)</div>
              <div className="text-base font-medium text-emerald-500">+9.2%</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-500">Performance Gap</div>
              <div className="text-base font-medium text-red-500">-1.4%</div>
            </div>
            <div className="w-full h-48 bg-slate-100 rounded flex justify-center items-center my-5 text-slate-500">Performance Chart</div>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">Optimize Portfolio</button>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">AI Predictions</div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="font-medium text-slate-800">AAPL</div>
              <div className="text-base font-medium text-emerald-500">+2.4% (7 Days)</div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="font-medium text-slate-800">NVDA</div>
              <div className="text-base font-medium text-emerald-500">+3.8% (7 Days)</div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="font-medium text-slate-800">TSLA</div>
              <div className="text-base font-medium text-red-500">-1.2% (7 Days)</div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="font-medium text-slate-800">BTC</div>
              <div className="text-base font-medium text-emerald-500">+5.1% (7 Days)</div>
            </div>
            <p className="text-amber-500 mb-4">Note: Predictions are based on historical data and market trends. Actual results may vary.</p>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px]">View All Predictions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsPage;