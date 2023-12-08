import { RiHeartAddFill } from "react-icons/ri";
import { QUERY_USER } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Friend = () => {
  const [userData, setUserData] = useState({});

  const [findFriend] = useLazyQuery(QUERY_USER);

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

  return (
    <>
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
              <button className="btn addFriend card-link">
                <RiHeartAddFill className="addFriend-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friend;
