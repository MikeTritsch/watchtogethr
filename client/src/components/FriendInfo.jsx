
const FriendInfo = ({ friend }) => {
// You can access friendData properties and render them as needed

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
