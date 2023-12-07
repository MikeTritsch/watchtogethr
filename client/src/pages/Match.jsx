import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"
import Samplemovie from "../assets/images/startrek-placeholder.jpg"
import Movie from "../components/Movie"
import {QUERY_MOVIE} from "../utils/queries"
import {QUERY_ALL_MOVIES} from "../utils/queries"
import { useQuery, useMutation } from '@apollo/client';




var imdbId = "tt0114709";

const Match = () => {
  
  const { loading, error, data } = useQuery(QUERY_ALL_MOVIES);
  console.log(loading);
  console.log(error);
  console.log(data);
  const movies = data?.movies || [];

  return (
    <>
      <div className="card-container">
        <div className="card match-card">
          <div className="card-image">
            <img src={Samplemovie} className="card-img-top" alt="..." />
          </div>
          <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
              
            <Movie 
              title="Sample"
              plot={movie.Plot}
              genre={movie.genre}
              year={movies.Year}
              actors={sampleMovie.Actors}
            />
          )}
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
  )
}

export default Match;
