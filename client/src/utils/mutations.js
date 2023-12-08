import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const CREATE_MOVIE = gql`
  mutation createMovie($Actors: String!, $Director: String!, $Genre: String!, $Plot: String!, $Poster: String!, $Title: String!, $Year: String!, $imdbID: String!) {
    createMovie(Actors: $Actors, Director: $Director, Genre: $Genre, Plot: $Plot, Poster: $Poster, Title: $Title, Year: $Year, imdbID: $imdbID) {
        _id
        Actors
        Director
        Genre
        Plot
        Poster
        Title
        Year
        imdbID
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;


export const ADD_FRIEND = gql `
mutation addFriend($addFriendId: ID!, $friendId: ID!) {
  addFriend(addFriendId: $addFriendId, friendId: $friendId) {
    username
    likedMovies
    _id
  }
}`


export const ADD_MOVIESMALL = gql`
  mutation addMovieSmall($imdbID: String!) {
    addMovieSmall(imdbID: $imdbID) {
      imdbID
    }
  }

`;

export const LIKE_MOVIE = gql`
  mutation likeMovie($email: String!, $_id: ID!) {
    likeMovie(email: $email, _id: $_id) {
      email
    }
  }

`;