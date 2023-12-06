// import logo from "../assets/images/WatchTogethr.png";
// import lightLogo from "../assets/images/WatchTogethrWhiteVersion.png";
import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import { Link } from 'react-router-dom';

const Header = () => {
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/Signup">
                  Join
                  {/* Need to change on login???? */}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/Match">
                  Watchtogethr
                </Link>
              </li>
            </ul>
            <div className="search-form-home container-fluid d-flex flex-column align-items-end">              
              <form className="search-form-home d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for a friend..."
                  aria-label="Search"
                />
                <button className="btn search-btns btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search movies..."
                  aria-label="Search"
                />
                <button className="btn search-btns btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
