/* eslint-disable react/prop-types */

import ProfileFriendMovies from "./ProfileFriendMovies";

export default function ProfileFriend({ friends }) {

    return (
        <div>
        {friends.map((friend) => (

        <li className="profile-card card mb-3" key={friend.name}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/user-icon.png" className="img-fluid rounded-start friend-icon" alt="Friend Outline Icon" />
                <div className="friend-name">{friend.name}</div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title, movie-posters-box">{friend.name}'s Liked Movies</h5>
                <ProfileFriendMovies films={friend.movies}/>
                <p className="card-text"><small className="text-muted"></small></p>
                </div>
              </div>
            </div>
          </div>
        </li>


))}
</div>
)
}