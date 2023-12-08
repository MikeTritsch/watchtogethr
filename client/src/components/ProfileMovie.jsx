/* eslint-disable react/prop-types */

export default function ProfileMovie({ movies }) {

    // Helper function that generates a random width for our placeholder images
    return (
        <div>
        {movies.map((movie) => (

            <li className="profile-card card mb-3" key={movie.Title}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="poster-container col-md-4">
                  <img src={movie.Poster} className="profile-poster img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text"><small className="text-muted">{movie.Plot}</small></p>
                    <p className="card-text"><small className="text-muted">Genre: {movie.Genre}</small></p>
                    <p className="card-text"><small className="text-muted">Starring: {movie.Actors}</small></p>
                    <p className="card-text"><small className="text-muted">Year: {movie.Year}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </li>


        ))}
        </div>
    )
  }
  