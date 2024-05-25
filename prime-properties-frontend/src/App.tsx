import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import SellerDashboard from './components/SellerDashboard';
import AddProperty from './components/AddProperty';
import UpdateProperty from './components/UpdateProperty';

interface AddPropertyProps {
  onAdd: (newProperty: any) => void;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sellerDashboard" element={<SellerDashboard />} />
          {/* <Route path="/addProperty" element={<AddProperty onAdd={} />} /> */}
          {/* <Route path="/updateProperty" element={<UpdateProperty  onUpdate={}/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
