// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

// // Need to query a user to extrapolate it's data

const FriendInfo = ({ friend }) => {
//   // You can access friendData properties and render them as needed

return (
  <div className="friend-search-card">
    <ul className="list-group-search list-group-flush" key={friend._id}>
    <li className="list-group-item" key={friend._id}>
        <p className="card-text">
          <small className="text-muted">{friend.username}</small>
        </p>
      </li>
      {friend.movies && friend.movies.length > 0 ? (
        friend.movies.map((movie) => (
          <li className="friend-movie-title list-group-item" key={movie._id}>
            <h6 className="card-title">{movie._id}</h6>
            <p className="card-text">Movie Title: {movie.Title}</p>
          </li>
        ))
      ) : (
        <li className="list-group-item">
          <p className="no-movies-found-text">No movies found for {friend.username}</p>
        </li>
      )}
    </ul>
  </div>
);

}

export default FriendInfo



// /* eslint-disable react/prop-types */

// export default function ProfileMovie({ movies }) {

//   // Helper function that generates a random width for our placeholder images
//   return (
//       <div>
//       {movies.map((movie) => (

//           <li className="profile-card card mb-3" key={movie.Title}>
//           <div className="card mb-3">
//             <div className="row g-0">
//               <div className="poster-container col-md-4">
//                 <img src={movie.Poster} className="profile-poster img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">{movie.Title}</h5>
//                   <p className="card-text"><small className="text-muted">{movie.Plot}</small></p>
//                   <p className="card-text"><small className="text-muted">Genre: {movie.Genre}</small></p>
//                   <p className="card-text"><small className="text-muted">Starring: {movie.Actors}</small></p>
//                   <p className="card-text"><small className="text-muted">Year: {movie.Year}</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>


//       ))}
//       </div>
//   )
// }