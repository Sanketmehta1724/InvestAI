import React from 'react';

import { Link } from "react-router-dom";


const UserDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-40 bg-slate-50 py-5 shadow">
        <div className="px-5 mb-5 flex items-center font-bold text-lg">
          <Link to="" className="text-emerald-500">InvestAI</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-white bg-blue-600 border-l-emerald-500">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
          <Link to="/virtualtrade">Virtual Trading</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
          <Link to="/aiinsights">AI Insights</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
          <Link to="/markettrend">Market Trends</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
          <Link to="/portfolio">Portfolio Management</Link>
        </div>
        <div className="px-5 py-2.5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
          <Link to="/settings">Settings</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-5 bg-slate-50">
        <div className="text-2xl mb-5 text-slate-800 font-bold">Dashboard</div>
        
        {/* Grid 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
            <div className="text-lg font-semibold text-slate-800 mb-4">User Summary</div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-400">Name</div>
              <div className="text-base font-medium text-slate-800">Devika Yadav</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-400">Risk Appetite</div>
              <div className="text-base font-medium text-slate-800">Moderate</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
              <div className="text-sm text-slate-400">Investment Experience</div>
              <div className="text-base font-medium text-slate-800">Intermediate</div>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <div className="text-sm text-slate-400">AI Score</div>
              <div className="text-base font-medium text-slate-800">76/100</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
            <div className="text-lg font-semibold text-slate-800 mb-4">Portfolio Overview</div>
            <div className="w-full h-48 bg-slate-100 rounded-md flex items-center justify-center text-slate-400 text-sm my-4">
              Portfolio Pie Chart
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
            <div className="text-lg font-semibold text-slate-800 mb-4">Live Market Trends</div>
            <div className="flex items-center justify-between p-2 px-4 rounded-md bg-slate-100 my-1">
              <div className="font-semibold">AAPL</div>
              <div className="font-medium">$169.85</div>
              <div className="px-2 py-1 rounded text-xs font-medium text-emerald-500">+1.2%</div>
            </div>
            <div className="flex items-center justify-between p-2 px-4 rounded-md bg-slate-100 my-1">
              <div className="font-semibold">MSFT</div>
              <div className="font-medium">$287.65</div>
              <div className="px-2 py-1 rounded text-xs font-medium text-emerald-500">+0.8%</div>
            </div>
            <div className="flex items-center justify-between p-2 px-4 rounded-md bg-slate-100 my-1">
              <div className="font-semibold">TSLA</div>
              <div className="font-medium">$267.19</div>
              <div className="px-2 py-1 rounded text-xs font-medium text-red-500">-1.4%</div>
            </div>
            <div className="flex items-center justify-between p-2 px-4 rounded-md bg-slate-100 my-1">
              <div className="font-semibold">AMZN</div>
              <div className="font-medium">$178.45</div>
              <div className="px-2 py-1 rounded text-xs font-medium text-emerald-500">+0.5%</div>
            </div>
            <div className="w-full h-48 bg-slate-100 rounded-md flex items-center justify-center text-slate-400 text-sm my-4">
              Market Trend Chart
            </div>
          </div>
        </div>
        
        {/* Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
            <div className="text-lg font-semibold text-slate-800 mb-4">AI Insights</div>
            <div>
              <div className="font-semibold mb-1">Your Portfolio Health</div>
              <div>
                <div className="mb-2">Current Risk Level: 
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-500 ml-1">Moderate Risk</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm my-2">Your portfolio has a balanced risk profile, but could benefit from more diversification in tech stocks.</p>
            <button className="text-blue-600 bg-transparent border border-blue-600 px-3 py-1.5 rounded-md cursor-pointer text-sm font-medium hover:bg-blue-50 transition-all duration-300">View Details</button>
            
            <div className="mt-5">
              <div className="font-semibold mb-2">Next Best Action</div>
              <p className="text-slate-400 text-sm mb-2">Based on your risk profile and market conditions, the AI suggests:</p>
              <ul className="list-none my-2">
                <li className="py-2 flex items-center before:content-['•'] before:text-blue-600 before:font-bold before:inline-block before:w-4">Consider buying 5 shares of NVDA</li>
                <li className="py-2 flex items-center before:content-['•'] before:text-blue-600 before:font-bold before:inline-block before:w-4">Hold AAPL for 3 more weeks</li>
                <li className="py-2 flex items-center before:content-['•'] before:text-blue-600 before:font-bold before:inline-block before:w-4">Rebalance your crypto allocation</li>
              </ul>
              <button className="bg-blue-600 text-white border-none px-4 py-2 rounded-md cursor-pointer text-sm font-semibold hover:bg-blue-700 transition-all duration-300">Take Action</button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
            <div className="text-lg font-semibold text-slate-800 mb-4">Recent Trades Activity</div>
            <table className="w-full border-collapse my-2">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-b-2 border-gray-200 text-slate-400 font-semibold text-sm">Date</th>
                  <th className="text-left py-3 px-4 border-b-2 border-gray-200 text-slate-400 font-semibold text-sm">Asset</th>
                  <th className="text-left py-3 px-4 border-b-2 border-gray-200 text-slate-400 font-semibold text-sm">Type</th>
                  <th className="text-left py-3 px-4 border-b-2 border-gray-200 text-slate-400 font-semibold text-sm">Amount</th>
                  <th className="text-left py-3 px-4 border-b-2 border-gray-200 text-slate-400 font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Mar 21, 2025</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">AAPL</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Buy</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">$1,698.50</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-500">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Mar 19, 2025</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">ETH</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Sell</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">$1,245.32</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-500">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Mar 17, 2025</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">TSLA</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Buy</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">$2,514.70</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-500">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Mar 15, 2025</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">NVDA</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">Buy</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">$2,126.50</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-slate-800">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-500">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Performance Summary Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300">
          <div className="text-lg font-semibold text-slate-800 mb-4">Performance Summary</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1 text-emerald-500">$142,580</div>
              <div className="text-sm text-slate-400">Total Portfolio Value</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1 text-emerald-500">+12.4%</div>
              <div className="text-sm text-slate-400">YTD Return</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1">$23,450</div>
              <div className="text-sm text-slate-400">Unrealized Gains</div>
            </div>
          </div>
          <div className="w-full h-64 bg-slate-100 rounded-md flex items-center justify-center text-slate-400 text-sm mt-5">
            Performance History Chart
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;