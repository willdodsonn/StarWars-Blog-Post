import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            {" "}
            <div className="col">
              <div className="logo-image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </span>
        </Link>
        <div className="ml-auto">
		<div className="col">
          <Link to="/demo">
		  
            <button className="btn btn-light">
              Check out this other page
            </button>
          </Link>
		  </div>
        </div>
      </div>
    </nav>
  );
};
