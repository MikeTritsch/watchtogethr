import logo from '../assets/images/WatchTogethr.png'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Join
                  {/* Need to change on login???? */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watchtogethr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="logo-div">
      <img className="logo" src={logo} alt={"Watch Togethr Logo"}/>
      </div>
    </div>
  );
};

export default Header;
