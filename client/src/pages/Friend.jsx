import { RiHeartAddFill } from "react-icons/ri";
import FriendInfo from "../components/FriendInfo";
import { ADD_FRIEND } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

//finds and renders user's list of friends

const Friend = () => {
  const [userData, setUserData] = useState({});
  const [friendData, setFriendData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
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


  const addFriendBtn = async (e) => {
    const currentUser = Auth.getProfile().data;
    console.log(currentUser);

    const { data: friendData } = await addFriend({
      variables: {
        addFriendId: currentUser._id,
        friendId: userData._id,
      },
    });
    console.log(userData);

    setSuccessMessage("Friend Added!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <>
      {!loggedIn && window.location.assign("/")}
      <div className="search-form-home container-fluid d-flex flex-column align-items-center">
        <form className="movie-search-form d-flex" onSubmit={searchFriends}>
          <label htmlFor="username"></label>
          <input
            className="form-control border-danger me-2"
            type="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Search for a friend..."
            aria-label="Search"
            name="username"
          />

          <button
            className="btn search-btns btn-danger"
            type="button"
            onClick={searchFriends}
          >
            Search
          </button>
        </form>
        {userData && Object.keys(userData).length > 0 && (
          <>
            <div className="friend-card">
              <div className="friend-card-body card">
                <div className="card-body">
                  <h5 className="card-title">{userData?.username}</h5>
                  <button
                    onClick={addFriendBtn}
                    className="btn addFriend card-link"
                  >
                    <RiHeartAddFill className="addFriend-icon" />
                  </button>
                  {successMessage && (
                    <div className="success-div">
                      <p>{successMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <FriendInfo friend={userData} />
          </>
        )}
        {!userData && (
          <p className="no-friend-found">No user found with that username.</p>
        )}
      </div>
    </>
  );
};

export default Friend;
