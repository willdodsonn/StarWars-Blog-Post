import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
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
            <div className="btn-group dropright">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
               
                {store.favorites.length > 0
                  ? store.favorites.map((item, index) => {
                    return (
                      <a className="dropdown-item" href="#/action-1" key={index}>{item.name}</a>
                    );
                  })
                  : "No Favorites Added"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
