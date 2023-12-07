import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"
import Samplemovie from "../assets/images/startrek-placeholder.jpg"
import Movie from "../components/Movie"
import {QUERY_ALL_MOVIES} from "../utils/queries"
import { useQuery } from '@apollo/client';



const Match = () => {
  
  const { loading, data } = useQuery(QUERY_ALL_MOVIES);
  console.log(loading);
  console.log(data);
  const movies = data?.movies || [];

  var movie = movies[Math.floor(Math.random()*movies.length)];


  return (
    <>
      <div className="card-container">
        <div className="card match-card">

          <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
            <div className="card-image">
            <img src={movie.Poster} className="card-img-top" alt="..." />
          </div>
            <Movie 
              title={movie.Title}
              plot={movie.Plot}
              genre={movie.Genre}
              year={movie.Year}
              actors={movie.Actors}
            />
            </div>
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
