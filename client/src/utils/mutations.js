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


export const ADD_FRIEND = gql `
mutation AddFriend($username: String!, $userFriend: UserInput!) {
  addFriend(username: $username, userFriend: $userFriend) {
    username
    friends {
      username
    }
  }
  }`;

export const ADD_MOVIESMALL = gql`
  mutation addMovieSmall($imdbID: String!) {
    addMovieSmall(imdbID: $imdbID) {
      imdbID
    }
  }

`;

export const LIKE_MOVIE = gql`
  mutation likeMovie($email: String!, $imdbID: String!) {
    likeMovie(email: $email, imdbID: $imdbID) {
      email
    }
  }

`;