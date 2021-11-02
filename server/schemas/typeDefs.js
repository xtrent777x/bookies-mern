const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: ID!): User
    removeBook(bookId: ID!): User
    
  }
`;


module.exports = typeDefs;
