import React from 'react';

import { Link } from "react-router-dom";


const PortfolioManagement = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-40 bg-white p-5 py-5 shadow">
        <div className="flex items-center font-bold text-lg text-blue-600 mb-5">
          <Link to="" className="text-emerald-500 ml-2">InvestAI</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out">
          <Link to="/" className="ml-2.5">Dashboard</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/virtualtrade" className="ml-2.5">Virtual Trading</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/aiinsight" className="ml-2.5">AI Insights</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/markettrend" className="ml-2.5">Market Trends</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-blue-600 bg-blue-600 text-white">
          <Link to="/portfolio" className="ml-2.5">Portfolio Management</Link>
        </div>
        
        <div className="flex items-center p-2.5 cursor-pointer border-l-3 border-transparent text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:text-blue-600">
          <Link to="/settings" className="ml-2.5">Settings</Link>
        </div>
      </div>
      
      <div className="flex-1 p-5">
        <div className="text-2xl mb-5 text-slate-800 font-bold">Portfolio Management</div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
          <div className="mb-4 text-lg font-semibold text-slate-800">Portfolio Summary</div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1 text-emerald-500">$142,580</div>
              <div className="text-sm text-slate-500">Total Value</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1 text-emerald-500">+12.4%</div>
              <div className="text-sm text-slate-500">YTD Return</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-md text-center">
              <div className="text-xl font-semibold mb-1">$23,450</div>
              <div className="text-sm text-slate-500">Unrealized Gains</div>
            </div>
          </div>
          <p>Welcome Devika Yadav. Your portfolio has been analyzed by our AI for optimal allocation and performance metrics. Below is the breakdown of your investments.</p>
        </div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
          <div className="mb-4 text-lg font-semibold text-slate-800">Portfolio Overview</div>
          <div className="w-full h-64 flex my-5">
            <div className="flex flex-col items-center flex-1 justify-end px-1">
              <div className="w-full bg-blue-600 rounded-t-md" style={{ height: '60%' }}></div>
              <div className="mt-1 text-xs text-center text-slate-500">Stocks<br />60%</div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-end px-1">
              <div className="w-full bg-amber-500 rounded-t-md" style={{ height: '15%' }}></div>
              <div className="mt-1 text-xs text-center text-slate-500">Crypto<br />15%</div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-end px-1">
              <div className="w-full bg-purple-500 rounded-t-md" style={{ height: '12%' }}></div>
              <div className="mt-1 text-xs text-center text-slate-500">Mutual Funds<br />12%</div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-end px-1">
              <div className="w-full bg-emerald-500 rounded-t-md" style={{ height: '8%' }}></div>
              <div className="mt-1 text-xs text-center text-slate-500">Bonds<br />8%</div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-end px-1">
              <div className="w-full bg-slate-500 rounded-t-md" style={{ height: '5%' }}></div>
              <div className="mt-1 text-xs text-center text-slate-500">Cash<br />5%</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-slate-200">
            <div className="text-sm text-slate-500">AI Allocation Recommendation</div>
            <div className="text-base font-medium text-slate-800 text-amber-500">Portfolio Rebalance Needed</div>
          </div>
          <p className="mt-2">Your portfolio is heavily weighted towards stocks. Consider increasing bond allocation to 15% for better risk management.</p>
          <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5">Get Rebalancing Plan</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Investment Returns</div>
            <table className="w-full border-collapse my-5">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Asset</th>
                  <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Buy Price</th>
                  <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Current Price</th>
                  <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Gain/Loss</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">AAPL (20 shares)</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$142.35</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$178.72</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-emerald-500">+25.55%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">MSFT (15 shares)</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$220.15</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$287.63</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-emerald-500">+30.65%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">TSLA (10 shares)</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$312.80</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$267.19</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-red-500">-14.58%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">BTC (0.5)</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$37,850</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$52,190</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-emerald-500">+37.89%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">ETH (2.3)</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$2,780</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$3,120</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-emerald-500">+12.23%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Vanguard 500 ETF</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$345.92</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$370.45</td>
                  <td className="py-2.5 px-4 border-b border-slate-200 text-sm text-emerald-500">+7.09%</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5">View All Assets</button>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-lg font-semibold text-slate-800">Tax Compliance</div>
            <div className="flex justify-between items-center py-2.5 border-b border-slate-200">
              <div className="text-sm text-slate-500">Estimated Capital Gains Tax</div>
              <div className="text-base font-medium text-slate-800">$4,690</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-slate-200">
              <div className="text-sm text-slate-500">Tax-Loss Harvesting Potential</div>
              <div className="text-base font-medium text-slate-800 text-emerald-500">$1,250</div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-slate-200">
              <div className="text-sm text-slate-500">Tax Efficiency Score</div>
              <div className="text-base font-medium text-slate-800 text-amber-500">72/100</div>
            </div>
            <p className="mt-2">Tax Saving Strategies Suggested by AI:</p>
            <div className="flex items-center mb-2.5">
              <div className="mr-2.5 text-blue-600">🔹</div>
              <div className="flex-1">Consider selling TSLA position to harvest tax losses, offsetting gains from AAPL and MSFT.</div>
            </div>
            <div className="flex items-center mb-2.5">
              <div className="mr-2.5 text-blue-600">🔹</div>
              <div className="flex-1">Maximize tax-advantaged accounts by increasing 401(k) contributions by $4,000.</div>
            </div>
            <div className="flex items-center mb-2.5">
              <div className="mr-2.5 text-blue-600">🔹</div>
              <div className="flex-1">Hold appreciated assets until they qualify for long-term capital gains rates.</div>
            </div>
            <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5">Get Tax Optimization Plan</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow-sm hover:translate-y-[-5px] hover:shadow-md transition-all duration-300">
          <div className="mb-4 text-lg font-semibold text-slate-800">Recent Transactions</div>
          <table className="w-full border-collapse my-5">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Date</th>
                <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Type</th>
                <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Asset</th>
                <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Amount</th>
                <th className="text-left py-3 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold text-sm">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Mar 18, 2025</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Buy</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">NVDA</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">5 shares</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$425.30</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Mar 12, 2025</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Sell</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">AMZN</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">2 shares</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$178.45</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Mar 05, 2025</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Buy</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">ETH</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">0.5</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$3,080.25</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Feb 28, 2025</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">Dividend</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">JNJ</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">-</td>
                <td className="py-2.5 px-4 border-b border-slate-200 text-sm">$42.75</td>
              </tr>
            </tbody>
          </table>
          <button className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5">View Transaction History</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagement;