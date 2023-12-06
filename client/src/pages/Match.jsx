import redLogo from "../assets/images/RedVersion-removebg-preview.png"
import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"
import Samplemovie from "../assets/images/startrek-placeholder.jpg"
import Movie from "../components/Movie"
import fs from 'fs';


function searchFilms(imdbid) {
  // replace `octocat` with anyone else's GitHub username

  var baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&i="


  var requestUrl = baseUrl + imdbid

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}

var file = fs.readFileSync('./imdbids.csv','utf8')
const imdbids = file.split('\n');
var randomMovieId = imdbids[Math.floor(Math.random() * imdbids.length)];

var sampleMovie = searchFilms(randomMovieId);


const Match = () => {
  return (
    <>
      <div className="card-container">
        <div className="card match-card">
          <div className="card-image">
            <img src={Samplemovie} className="card-img-top" alt="..." />
          </div>



          <div>
            <Movie 
              title={sampleMovie.title}
              plot={sampleMovie.plot}
              genre={sampleMovie.genre}
              year={sampleMovie.year}
              actors={sampleMovie.actors}
            />

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
