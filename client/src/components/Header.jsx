// import logo from "../assets/images/WatchTogethr.png";
// import lightLogo from "../assets/images/WatchTogethrWhiteVersion.png";
import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../utils/auth';


const Header = () => { 
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <>
      <div className="logo-div">
        <img className="logo" src={redLogo} alt={"Watch Togethr Logo"} />
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="nav-div container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              {Auth.loggedIn() ? (
                <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-item" to="/Profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item" to="/Match">
                      Watchtogethr
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="logout-btn nav-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                  </ul>
                  <div className="search-form-home container-fluid d-flex flex-column align-items-end">              
              <form className="movie-search-form d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for a friend..."
                  aria-label="Search"
                />
                <Link to="/Friend">
                  <button className="btn search-btns btn-outline-danger" type="button">
                    Search
                  </button>
                </Link>
              </form>
              <form className="movie-search-form d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search movies..."
                  aria-label="Search"
                />
                <Link to="/Match">
                  <button className="btn search-btns btn-outline-danger" type="submit">
                    Search
                  </button>
                </Link>
              </form>
            </div>
                </>
              ) : (
              <>
                <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-item" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item" to="/Signup">
                    Join
                  </Link>
                </li>
                </ul>
              </>
              )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
