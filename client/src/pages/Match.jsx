import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"
import Movie from "../components/Movie"
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ADD_MOVIESMALL } from "../utils/mutations";
import { CREATE_MOVIE } from "../utils/mutations"
import { LIKE_MOVIE } from "../utils/mutations";
import { FIND_MOVIE_BY_IMDBID } from "../utils/queries";



const delay = ms => new Promise(res => setTimeout(res, ms));


const Match = () => {


  const [posts, setPosts] = useState([]);
  const [createMovieSmall] = useMutation(ADD_MOVIESMALL);
  const [createMovie] = useMutation(CREATE_MOVIE);
  const [likeMovie] = useMutation(LIKE_MOVIE);
  let vals = returnRandomMovie();

  let movieUrl = vals[0];
  let imdbID = vals[1]

  useEffect(() => {

    axios.get(movieUrl)
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);


  const {loading, data} = useQuery(FIND_MOVIE_BY_IMDBID, {
    variables: {imdbID: posts.imdbID}
  });

  const id = data?.findMovieByImdbID._id || "Error"


  const handleNope = async (event) => {
    event.preventDefault();

    try {
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleWatch = async (event) => {
    event.preventDefault();
    console.log('purple', imdbID)
    try {
      var email = localStorage.getItem('loggedInUsername')
      console.log(email, id);
      const {data} = await likeMovie(
        {variables: {email: email, _id: id}}
      )

    } catch (err) {
      console.error(err);
    }

  }

  return (
    <>
      <div className="card-container">
        <div className="card match-card">
          <div>

            <div className="card-image">
            <img src={posts.Poster} className="card-img-top" alt="..." />
          </div>
            <Movie 
              title={posts.Title}
              plot={posts.Plot}
              genre={posts.Genre}
              year={posts.Year}
              actors={posts.Actors}
            />

          </div>

        </div>
      </div>
      <div className="gap-5 yes-no-container">
        <div className="no-watch-btn">
          <button className="nope-btn">
            <img src={nopeBtn} onClick={handleNope}></img>
          </button>
        </div>
        <div className="watch-btn">
          <button className="yes-btn">
            <img src={watchBtn} onClick={handleWatch}></img>
          </button>
        </div>
      </div>
    </>
  )
}

export default Match;



let sampleMovieIds = [

"tt0948470",
"tt0948470",
"tt0050083",
"tt0050083",
"tt0050083",
"tt0796366",
"tt0796366",
"tt0209144",
"tt2948356",
"tt10811166",
"tt0460649",
"tt0083658",
"tt0241527",
"tt0382932"
]

function returnRandomMovie() {

  let baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&i="
  let sampleMovie = sampleMovieIds[Math.floor(Math.random()*sampleMovieIds.length)];
  let movieUrl = baseUrl + sampleMovie
  
  return [movieUrl, sampleMovie]

}
