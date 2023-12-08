import { RiHeartAddFill } from "react-icons/ri";
import { ADD_FRIEND } from '../utils/mutations'
import { QUERY_USER } from "../utils/queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth'

const Friend = () => {
  const [userData, setUserData] = useState({});
  const loggedIn = Auth.loggedIn();
  console.log(loggedIn);
  const [findFriend] = useLazyQuery(QUERY_USER);
  const [addFriend] = useMutation(ADD_FRIEND);

  const [formState, setFormState] = useState({ username: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const searchFriends = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await findFriend({
        variables: { ...formState },
      });

      if (data) {
        setUserData(data.user);
      }
    } catch (error) {
      console.error(error);
    }

    setFormState({
      username: "",
    });
  };

  // Add friend mutuation here needs to take in ID
  const addFriendBtn = (e) => {
    const currentUser = Auth.getProfile().data;
    console.log(currentUser);

    const { data: friendData } = addFriend({ variables: {
      addFriendId: currentUser._id, friendId: userData._id
    }})
    console.log(friendData);
  }

  return (
    <>
    {!loggedIn && window.location.assign('/')}
      <div className="search-form-home container-fluid d-flex flex-column align-items-end">
        <form className="movie-search-form d-flex" onSubmit={searchFriends}>
          <label htmlFor="username"></label>
          <input
            className="form-control me-2"
            type="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Search for a friend..."
            aria-label="Search"
            name="username"
          />

          <button
            className="btn search-btns btn-outline-danger"
            type="button"
            onClick={searchFriends}
          >
            Search
          </button>
        </form>
        <div className="friend-card">
          <div className="friend-card-body card">
            <div className="card-body">
              <h5 className="card-title">{userData?.username}</h5>
              <button onClick={addFriendBtn} className="btn addFriend card-link">
                <RiHeartAddFill className="addFriend-icon" />
              </button>
            </div>
          </div>
        </div>
        {/* <FriendInfo friendId={userData._id}/> */}
      </div>
    </>
  );
};

export default Friend;
