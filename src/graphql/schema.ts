import { gql } from "graphql-tag";

export const typeDefs = gql`
  type MenuItem {
    id: Int!
    name: String!
    description: String!
    country: String!
    price: Float!
  }

  type Query {
    menuItems: [MenuItem!]!
  }
`;
