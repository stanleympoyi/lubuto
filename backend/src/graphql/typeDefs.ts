import { gql } from "apollo-server";

export = gql`
  type Product {
    name: String
    description: String
    color: [String]
    image: String
    size: [String]
    quantity: Int
    price: Float
    available: Boolean
    createdAt: String
  }

  input ProductInput {
    name: String
    description: String
    color: [String]
    image: String
    size: [String]
    quantity: Int
    price: Float
    available: Boolean
  }

  type Query {
    product(ID: ID!): Product!
    getProducts(price: Int): [Product]
  }

  type Mutation {
    createProduct(productInput: ProductInput): Product!
    deleteProduct(ID: ID!): Boolean
    editProduct(ID: ID!, productInput: ProductInput): Boolean
  }
`;
