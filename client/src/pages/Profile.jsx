import ProfileMovie from "../components/ProfileMovie"
import ProfileFriend from "../components/ProfileFriend";
import { FIND_MOVIE_BY_IMDBID, QUERY_USERS } from "../utils/queries";
import { QUERY_USER_BY_EMAIL } from "../utils/queries";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth'


//a user's profile page. Shows movies they want to watch and friends they have added.

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


  let sampleFriends = 
    [
      {
        "name": "John Doe",
        "email": "me@me.com",
        "movies": [
          "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
          

"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
      ]
      },
      {
        "name": "Jane Doe",
        "email": "testuser13@me.com",
        "movies": [
"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
          
        ]
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
              < ProfileFriend friends={sampleFriends}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile