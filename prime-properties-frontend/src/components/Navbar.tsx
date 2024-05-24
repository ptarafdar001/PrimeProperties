import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  return (
    <nav className="bg-slate-300 p-3 shadow-md sticky top-0 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-lime-200 text-3xl font-bold">
          <Link to="/">Prime Prop</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/sellerDashboard"
            className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded"
          >
            Seller Dashboard
          </Link>
          {isAuthenticated ? (
            <>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
