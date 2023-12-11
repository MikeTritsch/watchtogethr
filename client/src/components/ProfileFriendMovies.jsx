export default function ProfileFriendMovies({ films }) {


    return (
        <div>
        {films.map((film) => (
            <div  key={film}>
                  <img src={film} className="profile-poster img-fluid rounded-start" alt="..." />
            </div>
        ))}
        </div>
    )
  }
  