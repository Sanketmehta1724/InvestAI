import React from 'react';
import { Link } from "react-router-dom";


const VirtualTradingAIInsights = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-slate-200 pt-5">
        <div className="flex items-center px-5 pb-5 border-b border-slate-200 mb-4">
          <Link className="font-bold text-lg text-emerald-500">InvestAI</Link>
        </div>
        <ul className="list-none">
          <li className="flex items-center py-3 px-5 text-slate-500 transition-all duration-300 cursor-pointer font-medium hover:text-blue-600 hover:bg-blue-600/5">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex items-center py-3 px-5 bg-blue-600/10 text-blue-600 border-l-3 border-blue-600 transition-all duration-300 cursor-pointer font-medium">
            <Link to="/virtualtrade">Virtual Trading</Link>
          </li>
          <li className="flex items-center py-3 px-5 text-slate-500 transition-all duration-300 cursor-pointer font-medium hover:text-blue-600 hover:bg-blue-600/5">
            <Link to="/aiinsights">AI Insights</Link>
          </li>
          <li className="flex items-center py-3 px-5 text-slate-500 transition-all duration-300 cursor-pointer font-medium hover:text-blue-600 hover:bg-blue-600/5">
            <Link to="/markettrend">Market Trends</Link>
          </li>
          <li className="flex items-center py-3 px-5 text-slate-500 transition-all duration-300 cursor-pointer font-medium hover:text-blue-600 hover:bg-blue-600/5">
            <Link to="/portfolio">Portfolio Management</Link>
          </li>
          <li className="flex items-center py-3 px-5 text-slate-500 transition-all duration-300 cursor-pointer font-medium hover:text-blue-600 hover:bg-blue-600/5">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-slate-50">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-slate-800">Virtual Trading</div>
        </div>

        <div className="mb-4">
          <h1 className="text-4xl font-semibold text-slate-800 mb-1">Your AI-Powered Investment Coach</h1>
          <p className="text-slate-500 text-lg">AI-driven personalized recommendations & emotional trading warnings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {/* Emotional Trading Detector */}
          <div className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Emotional Trading Detector</h2>
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                😮
              </div>
            </div>
            <div className="text-slate-500">
              <p>AI analysis of your trading patterns to detect emotional decisions</p>
              
              <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 mt-4">
                <div className="font-semibold text-amber-500 mb-1">Potential FOMO Detected</div>
                <p>Recent crypto purchases show signs of fear-of-missing-out behavior. Consider setting trading limits.</p>
              </div>

              <div className="flex justify-between mt-5">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-blue-600">73%</div>
                  <div className="text-sm text-slate-500">Rationality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-blue-600">12</div>
                  <div className="text-sm text-slate-500">Impulsive Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-blue-600">85%</div>
                  <div className="text-sm text-slate-500">Strategy Adherence</div>
                </div>
              </div>

              <button className="bg-blue-600 text-white border-none rounded-lg py-3 px-6 font-semibold cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-700 hover:translate-y-[-2px]">
                View Detailed Analysis
              </button>
            </div>
          </div>

          {/* Portfolio Risk Analysis */}
          <div className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Portfolio Risk Analysis</h2>
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                ⚠️
              </div>
            </div>
            <div className="text-slate-500">
              <p>AI flags overexposure to risky assets or market sectors</p>
              
              <div className="h-36 bg-blue-600/5 rounded-lg my-4 flex items-center justify-center text-slate-500">
                <img src="performance_comapriosion.png" alt="" />
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex-1 min-w-[120px] p-3 bg-black/5 rounded-lg">
                  <div className="text-sm mb-1 text-slate-500">Tech Sector</div>
                  <div className="text-xl font-semibold text-red-500">38%</div>
                </div>
                <div className="flex-1 min-w-[120px] p-3 bg-black/5 rounded-lg">
                  <div className="text-sm mb-1 text-slate-500">Crypto</div>
                  <div className="text-xl font-semibold text-amber-500">24%</div>
                </div>
                <div className="flex-1 min-w-[120px] p-3 bg-black/5 rounded-lg">
                  <div className="text-sm mb-1 text-slate-500">Blue Chips</div>
                  <div className="text-xl font-semibold text-emerald-500">19%</div>
                </div>
                <div className="flex-1 min-w-[120px] p-3 bg-black/5 rounded-lg">
                  <div className="text-sm mb-1 text-slate-500">ETFs</div>
                  <div className="text-xl font-semibold text-emerald-500">15%</div>
                </div>
              </div>

              <button className="bg-blue-600 text-white border-none rounded-lg py-3 px-6 font-semibold cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-700 hover:translate-y-[-2px]">
                Balance Portfolio
              </button>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Performance Comparison</h2>
            </div>
            <div className="text-slate-500">
              <p>Your portfolio performance compared to market benchmarks</p>
              
              <div className="h-48 bg-blue-600/5 rounded-lg my-4 flex items-center justify-center text-slate-500">
                <img src="risk-distribution.jpg" alt="" />
              </div>

              <div className="flex justify-center gap-5 mt-3">
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-3 h-3 rounded bg-blue-600 mr-1"></div>
                  Your Portfolio (+8.2%)
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-3 h-3 rounded bg-slate-500 mr-1"></div>
                  S&P 500 (+5.4%)
                </div>
              </div>

              <button className="bg-blue-600 text-white border-none rounded-lg py-3 px-6 font-semibold cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-700 hover:translate-y-[-2px]">
                View Historical Comparison
              </button>
            </div>
          </div>

          {/* AI Predictions */}
          <div className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">AI Predictions</h2>
            </div>
            <div className="text-slate-500">
              <p>AI-powered market movement predictions for your assets</p>
              
              <div className="mt-4">
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center mr-3 text-xs">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">AAPL</div>
                      <div className="text-sm text-slate-500">Apple Inc.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-500">+2.8%</div>
                    <div className="text-sm text-slate-500">Next 7 days</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center mr-3 text-xs">
                      T
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">TSLA</div>
                      <div className="text-sm text-slate-500">Tesla Inc.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-red-500">-1.5%</div>
                    <div className="text-sm text-slate-500">Next 7 days</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center mr-3 text-xs">
                      B
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">BTC</div>
                      <div className="text-sm text-slate-500">Bitcoin</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-500">+4.3%</div>
                    <div className="text-sm text-slate-500">Next 7 days</div>
                  </div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center mr-3 text-xs">
                      M
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">MSFT</div>
                      <div className="text-sm text-slate-500">Microsoft Corp.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-500">+1.7%</div>
                    <div className="text-sm text-slate-500">Next 7 days</div>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 text-white border-none rounded-lg py-3 px-6 font-semibold cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-700 hover:translate-y-[-2px]">
                See All Predictions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTradingAIInsights;