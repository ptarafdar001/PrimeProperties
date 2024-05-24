import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import SellerDashboard from './components/SellerDashboard';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sellerDashboard" element={<SellerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
