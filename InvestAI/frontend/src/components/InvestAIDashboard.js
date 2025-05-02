import React from 'react';

import { Link } from "react-router-dom";
import girlImage from "../girl.jpg"
import landingImage from "../landing.jpg"
import boy1 from "../boy1.jpg"
import boy2 from "../boy2.jpg"


const InvestAIDashboard = () => {
  return (
    <div className="text-slate-800 bg-slate-50 leading-normal font-sans">
      <header className="py-5 fixed w-full bg-white shadow-sm z-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              InvestAI
            </a>
            <ul className="flex gap-8 list-none">
              <li><a href="#features" className="font-medium transition-colors hover:text-blue-600">Features</a></li>
              <li><a href="#testimonials" className="font-medium transition-colors hover:text-blue-600">Testimonials</a></li>
              <li><a href="#pricing" className="font-medium transition-colors hover:text-blue-600">Pricing</a></li>
            </ul>
            <div className="flex gap-4">
              <Link to = "login" className="inline-block py-3 px-6 font-semibold rounded-lg transition-all hover:translate-y-[-2px] bg-white text-blue-600 border-2 border-blue-600">Login</Link>
              <Link to="signup" className="inline-block py-3 px-6 font-semibold rounded-lg transition-all hover:translate-y-[-2px] hover:bg-blue-700 bg-blue-600 text-white">Get Started</Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-r from-white/90 to-white/70 bg-cover">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl leading-tight mb-6 text-slate-800">
                Make Smarter Investment Decisions with <span className="text-blue-600">AI</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8">
                InvestAI gives retail investors the power of artificial intelligence to analyze markets, optimize portfolios, and make data-driven investment decisions.
              </p>
              <div className="flex gap-4 mb-8">
                <a href="#" className="inline-block py-3 px-6 font-semibold rounded-lg transition-all hover:translate-y-[-2px] hover:bg-blue-700 bg-blue-600 text-white">Start Free Trial</a>
                <a href="#" className="inline-block py-3 px-6 font-semibold rounded-lg transition-all hover:translate-y-[-2px] bg-white text-blue-600 border-2 border-blue-600">Watch Demo</a>
              </div>
              <div className="flex gap-8">
                <div>
                  <span className="block text-2xl font-bold text-blue-600">30,000+</span>
                  <span className="block text-sm text-slate-500">Active Investors</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-blue-600">$1.8B</span>
                  <span className="block text-sm text-slate-500">Assets Analyzed</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-blue-600">4.8/5</span>
                  <span className="block text-sm text-slate-500">User Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={landingImage} alt="MarketMind Dashboard" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-800">AI-Powered Investment Tools</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our platform uses advanced machine learning to help you make better investment decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">Portfolio Analysis</h3>
              <p className="text-slate-500">
                AI-powered analysis of your investment portfolio's risk, diversification, and performance metrics.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">AI Investment Assistant</h3>
              <p className="text-slate-500">
                Ask questions in plain English and get data-backed answers about any stock, sector, or market trend.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">Pattern Recognition</h3>
              <p className="text-slate-500">
                Identify technical patterns and market anomalies that might be missed by human analysis.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">Sentiment Analysis</h3>
              <p className="text-slate-500">
                Monitor market sentiment across news, social media, and analyst reports to gauge momentum.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">Real-time Alerts</h3>
              <p className="text-slate-500">
                Get personalized notifications about market movements and opportunities relevant to your portfolio.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-4xl mb-4 text-blue-600"></div>
              <h3 className="text-xl mb-3 text-slate-800 font-medium">Goal-Based Planning</h3>
              <p className="text-slate-500">
                Set financial goals and get AI-powered recommendations to help you achieve them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-800">What Our Users Say</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Join thousands of investors who are already using InvestAI to transform their investment strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-8 shadow-md">
              <div className="italic mb-6 text-slate-800">
                "The AI assistant is like having a financial analyst on call 24/7. I can ask complex questions about market trends and get thoughtful, data-backed answers in seconds."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src={boy1} alt="Michael K." />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Michael K.</div>
                  <div className="text-sm text-slate-500">Part-time Investor</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-8 shadow-md">
              <div className="italic mb-6 text-slate-800">
                "The portfolio analysis found a sector concentration I hadn't noticed. Rebalancing based on InvestAI's recommendations boosted my returns by 14% in just three months."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src={girlImage} alt="Sarah J." />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Sarah J.</div>
                  <div className="text-sm text-slate-500">Active Trader</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-8 shadow-md">
              <div className="italic mb-6 text-slate-800">
                "As someone new to investing, the educational features and risk management tools have given me the confidence to build a portfolio aligned with my long-term goals."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src={boy2} alt="David T." />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">David T.</div>
                  <div className="text-sm text-slate-500">New Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-800">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Choose the plan that fits your investment strategy and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center relative transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-xl font-semibold mb-4 text-slate-800">Basic</div>
              <div className="text-4xl font-bold text-blue-600 mb-6">$9<span className="text-base text-slate-500">/month</span></div>
              <ul className="list-none mb-8 text-left">
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Basic Portfolio Analysis</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Limited AI Assistant Queries</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Daily Market Summaries</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Mobile App Access</li>
              </ul>
              <a href="#" className="inline-block py-3 px-6 w-full font-semibold rounded-lg transition-all hover:bg-blue-700 bg-blue-600 text-white">Get Started</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center relative transition-all hover:translate-y-[-5px] hover:shadow-lg border-2 border-blue-600 before:content-['Popular'] before:absolute before:top-0 before:right-8 before:bg-blue-600 before:text-white before:text-xs before:font-semibold before:py-1 before:px-4 before:rounded-b-lg">
              <div className="text-xl font-semibold mb-4 text-slate-800">Pro</div>
              <div className="text-4xl font-bold text-blue-600 mb-6">$29<span className="text-base text-slate-500">/month</span></div>
              <ul className="list-none mb-8 text-left">
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Advanced Portfolio Analysis</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Unlimited AI Assistant Queries</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Real-time Alerts</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Sentiment Analysis</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Strategy Backtesting</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Priority Support</li>
              </ul>
              <a href="#" className="inline-block py-3 px-6 w-full font-semibold rounded-lg transition-all hover:bg-blue-700 bg-blue-600 text-white">Get Started</a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center relative transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div className="text-xl font-semibold mb-4 text-slate-800">Enterprise</div>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-base text-slate-500">/month</span></div>
              <ul className="list-none mb-8 text-left">
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Everything in Pro</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">API Access</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Custom Reports</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Dedicated Account Manager</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Advanced Risk Modeling</li>
                <li className="py-2 text-slate-500 before:content-['✓'] before:text-emerald-500 before:font-bold before:mr-2">Multi-user Access</li>
              </ul>
              <a href="#" className="inline-block py-3 px-6 w-full font-semibold rounded-lg transition-all hover:bg-blue-700 bg-blue-600 text-white">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl mb-4">Start Making Smarter Investment Decisions Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of retail investors who are leveraging the power of AI to transform their investment strategies.
          </p>
          <a href="#" className="inline-block py-3 px-6 font-semibold rounded-lg transition-all hover:bg-slate-100 bg-white text-blue-600">Start Your 14-Day Free Trial</a>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Market<span className="text-emerald-500">Mind</span></div>
              <p className="text-zinc-400 mb-6">
                AI-powered investment dashboard helping retail investors make smarter decisions with advanced analytics and machine learning.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">Product</h4>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Features</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Pricing</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Integrations</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">Resources</h4>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Blog</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Guides</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Help Center</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">Company</h4>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">About</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Careers</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Contact</a></li>
                <li className="mb-3"><a href="#" className="text-zinc-400 transition-colors hover:text-white">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-zinc-400">
            <p>&copy; 2025 InvestAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvestAIDashboard;