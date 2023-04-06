import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from ".././firebase.init";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-blue-950 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li>
                  <a href="/">Home</a>
                </li>
              </Link>
              <li>
                <a href="/">Course</a>
              </li>

              <li>
                <a href="/">Teacher</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl text-white">
            Hellwet Soft
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            <Link to="/">
              <li>
                <a href="/">Home</a>
              </li>
            </Link>

            <li>
              <a href="/">Course</a>
            </li>

            <li>
              <a href="/">Teacher</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-between items-center gap-3">
            {user && (
              <h1 class=" text-sm text-white font-semibold">
                {user.displayName}
              </h1>
            )}

            <div>
              
                {user && (
                  <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt="avatar" src={user.photoURL} />
                  </div>
                </div>
                )}
            
            </div>
            {user ? (
                  <li>
                    <button className="btn btn-ghost text-white" onClick={logout}>
                      Sign Out
                    </button>
                  </li>
                ) : (
                  <Link to="/login"> <li>
                  <a href="/" className="text-white font-bold">Login</a>
                </li></Link>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
