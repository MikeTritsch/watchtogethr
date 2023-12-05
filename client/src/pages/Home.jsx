import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
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
      <p>Tired of debating on what to watch night after night? <br /> <strong>Not anymore.</strong> <br />
      WatchTogethr solves the common problem of endlessly scrolling through titles across countless platforms. <br /> You and a partner cycle through a list of shows and movies to <strong>decide what you do or don't want to watch.</strong> <br /> Once you've both matched, it's time to Watchtogethr.
      </p>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Home