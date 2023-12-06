import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"

const Match = () => {
  return (
    <>
      <div className="card-container">
        <div className="card match-card">
          <div className="card-image">
            <img src={redLogo} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>Title:</strong> Across The Universe</h5>
            <p className="card-text">
            The music of The Beatles and the Vietnam War form the backdrop for the romance between an upper-class American girl and a poor Liverpudlian artist.
            </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Genre:</strong> Romance</li>
            <li className="list-group-item"><strong>Year:</strong> 2007</li>
            <li className="list-group-item"><strong>Starring:</strong> Jim Sturgess, Evan Rachel Wood</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="gap-5 yes-no-container">
        <div className="no-watch-btn">
          <button className="nope-btn">
            <img src={nopeBtn}></img>
          </button>
        </div>
        <div className="watch-btn">
          <button className="yes-btn">
            <img src={watchBtn}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Match;
