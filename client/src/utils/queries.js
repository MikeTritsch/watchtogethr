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
}`