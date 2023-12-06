/* eslint-disable react/prop-types */
export default function Movie(props) {

    // Helper function that generates a random width for our placeholder images
    return (
        <div className="card-body">
        <h5 className="card-title">
        <strong>Title: </strong>{props.title}</h5>
        <p className="card-text">
            {props.plot}
        </p>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Genre:</strong> {props.genre}</li>
            <li className="list-group-item"><strong>Year:</strong> {props.year}</li>
            <li className="list-group-item"><strong>Starring:</strong> {props.actors}</li>
        </ul>
    </div>
    )
  }
  