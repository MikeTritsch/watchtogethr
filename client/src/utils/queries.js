import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
    user {
        _id
        username
        email
        password
        friends
        movies
    }
}`;

export const QUERY_USER =
    gql`
query user($username: String) {
    user(username: $username) {
        _id
        username
        email
        password
        friends
        movies
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
