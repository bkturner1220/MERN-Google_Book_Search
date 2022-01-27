const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    title: String
    description: String
    email: String
    # There is now a field to store the user's password
    password: String
    skills: [String]!
  }

  type User {
    _id: ID

  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth
    
    savedBooks(Book: AddBookDetails): User
    removeBook(bookId: ID!): User
  }
`;



module.exports = typeDefs;