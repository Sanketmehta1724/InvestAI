import React from 'react';

import { Link } from "react-router-dom";


const MarketTrends = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-56 bg-white py-5 shadow">
        <div className="px-5 mb-5 flex items-center font-bold text-lg text-blue-600">
            <Link to="" className="ml-2 text-emerald-500">InvestAI</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-500 transition-all duration-300">
          <Link to="/" className="ml-2">Dashboard</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-500 transition-all duration-300">
          <Link to="virtualtrade" className="ml-2">Virtual Trading</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-500 transition-all duration-300">
          <Link to="aiinsights" className="ml-2">AI Insights</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-blue-600 bg-blue-50 text-blue-600 font-medium transition-all duration-300">
          <Link to="markettrend" className="ml-2">Market Trends</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-500 transition-all duration-300">
          <Link to="portfolio" className="ml-2">Portfolio Management</Link>
        </div>
        <div className="py-3 px-5 flex items-center cursor-pointer border-l-3 border-transparent text-slate-500 transition-all duration-300">
          <Link to="settings" className="ml-2">Settings</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl mb-8 text-slate-800 font-bold">Market Trends</h1>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow">
          <div className="mb-4 text-lg font-semibold flex justify-between items-center text-slate-800">
            <div>Filters & Search</div>
            <button className="bg-white border border-gray-200 text-slate-500 py-1.5 px-3 rounded-lg text-sm cursor-pointer flex items-center transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              ↻ Refresh
            </button>
          </div>
          <div className="flex gap-2 mb-5 flex-wrap items-center">
            <button className="bg-blue-600 border border-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300">
              All
            </button>
            <button className="bg-white border border-gray-200 text-slate-500 py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              Stocks
            </button>
            <button className="bg-white border border-gray-200 text-slate-500 py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              Crypto
            </button>
            <button className="bg-white border border-gray-200 text-slate-500 py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              ETFs
            </button>
            <button className="bg-white border border-gray-200 text-slate-500 py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              Commodities
            </button>
            <button className="bg-white border border-gray-200 text-slate-500 py-2 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-600">
              Forex
            </button>
            <div className="flex flex-1 max-w-xs">
              <input 
                type="text" 
                className="flex-1 bg-white border border-gray-200 text-slate-800 py-2 px-3 rounded-l-lg outline-none"
                placeholder="Search assets..."
              />
              <button className="bg-blue-600 border-none text-white py-2 px-3 rounded-r-lg cursor-pointer transition-all duration-300 hover:bg-blue-700">
                🔍
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white rounded-lg p-5 mb-5 shadow transition-transform duration-300 hover:translate-y-0.5 hover:shadow-lg">
            <div className="mb-4 text-lg font-semibold text-slate-800">Top Gainers</div>
            <MarketItem name="Apple" ticker="AAPL" change="+4.32%" positive={true} />
            <MarketItem name="NVIDIA" ticker="NVDA" change="+3.85%" positive={true} />
            <MarketItem name="Microsoft" ticker="MSFT" change="+2.91%" positive={true} />
            <MarketItem name="Amazon" ticker="AMZN" change="+2.65%" positive={true} />
            <MarketItem name="Bitcoin" ticker="BTC" change="+2.14%" positive={true} />
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow transition-transform duration-300 hover:translate-y-0.5 hover:shadow-lg">
            <div className="mb-4 text-lg font-semibold text-slate-800">Top Losers</div>
            <MarketItem name="Netflix" ticker="NFLX" change="-3.76%" positive={false} />
            <MarketItem name="Tesla" ticker="TSLA" change="-2.89%" positive={false} />
            <MarketItem name="Meta" ticker="META" change="-2.34%" positive={false} />
            <MarketItem name="Dogecoin" ticker="DOGE" change="-1.92%" positive={false} />
            <MarketItem name="Coinbase" ticker="COIN" change="-1.76%" positive={false} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow transition-transform duration-300 hover:translate-y-0.5 hover:shadow-lg">
          <div className="mb-4 text-lg font-semibold text-slate-800">Market Heatmap</div>
          <div className="grid grid-cols-5 grid-rows-5 gap-2 h-72">
            <HeatmapTile ticker="AAPL" change="+4.32%" color="rgb(16, 185, 129, 0.7)" positive={true} />
            <HeatmapTile ticker="MSFT" change="+2.91%" color="rgb(16, 185, 129, 0.6)" positive={true} />
            <HeatmapTile ticker="AMZN" change="+2.65%" color="rgb(16, 185, 129, 0.5)" positive={true} />
            <HeatmapTile ticker="META" change="-2.34%" color="rgb(239, 68, 68, 0.5)" positive={false} />
            <HeatmapTile ticker="GOOGL" change="+1.45%" color="rgb(16, 185, 129, 0.4)" positive={true} />
            <HeatmapTile ticker="NVDA" change="+3.85%" color="rgb(16, 185, 129, 0.7)" positive={true} />
            <HeatmapTile ticker="JPM" change="+0.87%" color="rgb(16, 185, 129, 0.3)" positive={true} />
            <HeatmapTile ticker="V" change="+0.65%" color="rgb(16, 185, 129, 0.2)" positive={true} />
            <HeatmapTile ticker="NFLX" change="-3.76%" color="rgb(239, 68, 68, 0.7)" positive={false} />
            <HeatmapTile ticker="TSLA" change="-2.89%" color="rgb(239, 68, 68, 0.6)" positive={false} />
            <HeatmapTile ticker="WMT" change="+0.92%" color="rgb(16, 185, 129, 0.3)" positive={true} />
            <HeatmapTile ticker="PG" change="+0.43%" color="rgb(16, 185, 129, 0.2)" positive={true} />
            <HeatmapTile ticker="KO" change="-0.21%" color="rgb(239, 68, 68, 0.2)" positive={false} />
            <HeatmapTile ticker="DIS" change="+1.32%" color="rgb(16, 185, 129, 0.4)" positive={true} />
            <HeatmapTile ticker="COIN" change="-1.76%" color="rgb(239, 68, 68, 0.3)" positive={false} />
            <HeatmapTile ticker="BTC" change="+2.14%" color="rgb(16, 185, 129, 0.5)" positive={true} />
            <HeatmapTile ticker="ETH" change="+0.32%" color="rgb(16, 185, 129, 0.1)" positive={true} />
            <HeatmapTile ticker="DOGE" change="-1.92%" color="rgb(239, 68, 68, 0.4)" positive={false} />
            <HeatmapTile ticker="BA" change="+0.56%" color="rgb(16, 185, 129, 0.2)" positive={true} />
            <HeatmapTile ticker="XOM" change="-0.12%" color="rgb(239, 68, 68, 0.1)" positive={false} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-5 mb-5 shadow transition-transform duration-300 hover:translate-y-0.5 hover:shadow-lg">
          <div className="mb-4 text-lg font-semibold text-slate-800">AI-Curated News Feed</div>
          <NewsItem 
            source="Bloomberg" 
            time="2 hours ago" 
            category="Stocks"
            title="Apple Jumps 4% After Announcing New AI Features for iPhone" 
            summary="Apple shares surged after the company unveiled new AI capabilities coming to its flagship devices, impressing analysts with integration of advanced language models."
          />
          <NewsItem 
            source="CNBC" 
            time="3 hours ago" 
            category="Economy"
            title="Fed Minutes Show Central Bank May Pause Rate Hikes" 
            summary="Federal Reserve officials indicated in their latest meeting that they might hold interest rates steady as inflation appears to be cooling down, according to minutes released today."
          />
          <NewsItem 
            source="CoinDesk" 
            time="5 hours ago" 
            category="Crypto"
            title="Bitcoin Reclaims $50,000 Level Amid Growing Institutional Interest" 
            summary="Bitcoin rose above $50,000 as large institutional players continue to add the cryptocurrency to their balance sheets. ETFs have seen inflows for the third consecutive week."
          />
          <NewsItem 
            source="Wall Street Journal" 
            time="6 hours ago" 
            category="Stocks"
            title="Netflix Shares Fall on Subscriber Growth Concerns" 
            summary="Netflix stock tumbled nearly 4% after analysts raised concerns about slowing subscriber growth in key markets and increasing competition in the streaming space."
          />
        </div>
      </div>
    </div>
  );
};

// Market Item Component
const MarketItem = ({ name, ticker, change, positive }) => {
  return (
    <div className="flex justify-between items-center py-3.5 border-b border-gray-200 last:border-b-0">
      <div>
        <span className="font-semibold text-slate-800">{name}</span>
        <span className="text-slate-500 text-sm ml-1.5">{ticker}</span>
      </div>
      <div className={positive ? "text-emerald-500 font-semibold" : "text-red-500 font-semibold"}>
        {change}
      </div>
    </div>
  );
};

// Heatmap Tile Component
const HeatmapTile = ({ ticker, change, color, positive }) => {
  return (
    <div 
      className="rounded-lg flex justify-center items-center flex-col p-2 text-xs cursor-pointer shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{ backgroundColor: color }}
    >
      <div className="font-semibold mb-1 text-white">{ticker}</div>
      <div className={positive ? "text-emerald-500" : "text-red-500"}>
        {change}
      </div>
    </div>
  );
};

// News Item Component
const NewsItem = ({ source, time, category, title, summary }) => {
  // Determine badge color based on category
  const getBadgeClass = (category) => {
    switch(category) {
      case 'Stocks':
        return 'bg-blue-500 bg-opacity-10 text-blue-500';
      case 'Crypto':
        return 'bg-purple-500 bg-opacity-10 text-purple-500';
      case 'Economy':
        return 'bg-emerald-500 bg-opacity-10 text-emerald-500';
      default:
        return 'bg-blue-500 bg-opacity-10 text-blue-500';
    }
  };

  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between mb-1.5">
        <div className="text-slate-500 text-sm font-medium">{source}</div>
        <div className="text-slate-500 text-sm">{time}</div>
      </div>
      <div className="font-semibold mb-2 text-slate-800">
        <span className={`inline-block py-1 px-2 rounded-xl text-xs mr-1.5 font-medium ${getBadgeClass(category)}`}>
          {category}
        </span>
        {title}
      </div>
      <div className="text-sm text-slate-500 leading-6">
        {summary}
      </div>
    </div>
  );
};

export default MarketTrends;