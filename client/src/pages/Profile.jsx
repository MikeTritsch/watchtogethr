import ProfileMovie from "../components/ProfileMovie"
import { FIND_MOVIE_BY_IMDBID, QUERY_USERS } from "../utils/queries";
import { QUERY_USER_BY_EMAIL } from "../utils/queries";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth'

const Profile = () => {

  const loggedIn = Auth.loggedIn();
  let sampleMovie = 
    [
      {
          "Title": "Across the Universe",
          "Plot": "The music of The Beatles and the Vietnam War form the backdrop for the romance between an upper-class American girl and a poor Liverpudlian artist.",
          "Genre": "Drama, Fantasy, History",
          "Year": "2009",
          "Actors": "Evan Rachel Wood, Jim Sturgess, Joe Anderson",
          "Director": "Julie Taymore",
          "imdbID": "tt0445922",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDViYjYzMTctNDFlNS00NmFmLWJlMGUtZDFmZmFjY2Q2ODhjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_SX300.jpg"
      }
  ]    
  console.log(localStorage.getItem("loggedInUsername"))
  const {loading, data} = useQuery(QUERY_USER_BY_EMAIL, {
    variables: {email: localStorage.getItem("loggedInUsername")}
  });

  const movies = data?.findUserByEmail.movies || sampleMovie

  return (
    <>
    {!loggedIn && window.location.assign('/')}
      <div className="profile-container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My Movies</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">My Friends</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <ul className="profile-ul">
              < ProfileMovie movies={movies}/>
            </ul>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <ul>
              <li className="profile-card card mb-3">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title 2</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile