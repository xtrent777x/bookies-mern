import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook( $savedBook: SavedBooks ){
        saveBook( savedBook: $savedBook ){
            authors
            description
            bookId
            image
            title
            link
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: String){
        deleteBook(bookId: $bookId){
            _id
            username
            savedBooks
        }
    }
`;