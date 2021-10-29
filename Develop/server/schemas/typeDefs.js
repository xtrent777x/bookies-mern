const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: String
  }

  type Book {
    _id: ID
    authors: String
    description: String
    title: String
    image:
    link:
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
   
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: ID!): Save
    removeBook(bookId: ID!): Remove
    
  }
`;


module.exports = typeDefs;
