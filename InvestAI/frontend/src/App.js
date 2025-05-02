import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDashboard from './components/UserDashboard';
import PortfolioManagement from './components/PortFolioManagement';
import SettingsProfilePage from './components/SettingsProfilePage';
import VirtualTradingAIInsights from './components/VirtualTradingInsights';
import MarketTrends from './components/MarketTrends';
import AIInsightsPage from './components/AIInsights';
import InvestAIDashboard from './components/InvestAIDashboard';
import SignupForm from './components/Signup'
import SigninForm from './components/signin';



function App() {
  return (
   <>
   <Router>
     
      <Routes>
        <Route path="/" element={<InvestAIDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/portfolio" element={<PortfolioManagement />} />
        <Route path="/settings" element={<SettingsProfilePage />} />
        <Route path="/virtualtrade" element={<VirtualTradingAIInsights />} />
        <Route path="/markettrend" element={<MarketTrends />} />
        <Route path="/aiinsights" element={<AIInsightsPage />} />
        <Route path = "/signup" element = {<SignupForm />} />
        <Route path = "/login" element = {<SigninForm />} />



      </Routes>
    </Router>
   </>
  );
}

export default App;
