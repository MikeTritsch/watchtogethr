import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../utils/auth';


//Header that goes across all pages of the app

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
          //conditional rendering upon login
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
                    <Link className="nav-item" to="/Friend">
                      Find Friends
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="logout-btn nav-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                  </ul>
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
