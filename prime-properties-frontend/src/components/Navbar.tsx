import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const location = useLocation();

  // Hide Navbar on Login and Register pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <nav className="bg-slate-300 p-3 sticky top-0 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-lime-800 text-3xl font-bold">
          <Link to="/">Prime Prop</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/sellerDashboard"
            className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded"
          >
            Seller Dashboard
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/Home" className="text-blue-500 hover:underline">
                Home
              </Link>
              <button
                onClick={() => dispatch(logout())}
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
