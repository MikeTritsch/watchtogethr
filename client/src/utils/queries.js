import { gql } from '@apollo/client';

//db queries from the front-end

export const QUERY_USERS = gql`
query users {
    user {
        _id
        username
        email
    }
}`;

export const QUERY_USER =
    gql`
query user($username: String) {
    user(username: $username) {
        _id
        movies {
          _id
        }
        username
        email
        friends {
          _id
        }
    }
}`;

export const QUERY_USER_BY_EMAIL =
    gql`
query findUserByEmail($email: String!) {
  findUserByEmail(email: $email) {
        username
        movies {
          _id
          Actors
          Director
          Genre
          imdbID
          Plot
          Poster
          Title
          Year
        }

    }
}`;

export const QUERY_MOVIES =
    gql`
query movies($username: String) {
    movies(username: $username)
        _id
        title
        director
        actors
        year
        whereAvailable
}`;

export const QUERY_MOVIE = gql`
  query movie($imdbID: String) {
    movies(imdbID: $imdbID) {
        Title
        Director
        Actors
        Year
        Plot
    }
  }
`;

export const FIND_MOVIE_BY_IMDBID = gql`
  query findMovieByImdbID($imdbID: String!) {
    findMovieByImdbID(imdbID: $imdbID) {
        _id
        Title
    }
  }
`;


export const QUERY_ALL_MOVIES = gql`
  query allMovies{
    movies {
      _id
      Title
      Genre
      Plot
      Year
      Actors
      Poster
    }
  }
`;

