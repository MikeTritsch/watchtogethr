import { Link } from "react-router-dom";
import Roll from "react-reveal";

//Homepage rendering

const Home = () => {
  return (
    <>
      <Roll top>
        <div className="motto-div">
          <h1 className="motto">WatchTogethr</h1>
        </div>
        <div className="btn-div">
          <Link to="/Signup" className="home-to-join">
            <button type="button" className="btn join-btn">
              Join
            </button>
          </Link>
        </div>
        <div className="about-div">
          <h1 className="motto">About</h1>
        </div>
        <div className="about-text">
          <p>
            Tired of debating on what to watch night after night? <br />{" "}
            <strong>Not anymore.</strong> <br />
            WatchTogethr solves the common problem of endlessly scrolling
            through titles across countless platforms. <br /> You and a partner
            cycle through a list of shows and movies to{" "}
            <strong>
              decide what you do or don't want to watch.
            </strong> <br /> Once you've both matched, it's time to
            Watchtogethr.
          </p>
        </div>
        <div className="bio-div">
          <h1 className="motto">Who We Are</h1>
        </div>
        <div className="bio-text">
          <h2>Meet the minds behind Watchtogethr</h2>
          <a className="contact-links" href="https://github.com/BitsTuck" target="_blank">
            <p>
              Elizabeth Tucker |<strong> Back-End Engineer</strong>
            </p>
          </a>
          <a className="contact-links" href="https://github.com/Estevan-Gonzales" target="_blank">
            <p>
              Estevan Gonzales | <strong> Back-End Engineer</strong>
            </p>
          </a>
          <a className="contact-links" href="https://github.com/libbyou" target="_blank">
            <p>
              Libby You |<strong> Front-End Engineer</strong>
            </p>
          </a>
          <a className="contact-links" href="https://github.com/martinsandoval007" target="_blank">
            <p>
              Martin Sandoval |<strong> Back-End Engineer</strong>
            </p>
          </a>
          <a className="contact-links" href="https://github.com/MikeTritsch" target="_blank">
            <p>
              Mike Tritsch |<strong> Front-End Engineer</strong>
            </p>
          </a>
          <p></p>
        </div>
      </Roll>
    </>
  );
};

export default Home;
