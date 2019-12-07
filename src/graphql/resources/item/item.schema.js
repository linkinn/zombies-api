const itemType = `
  type Item {
    id: ID!
    name: String!
    points: Int!
    created_at: String!
    updated_at: String!
  }
`;

const itemQueries = `
  items(first: Int, offset: Int): [Item!]!
  item(id: ID!): Item
`;

module.exports = {
  itemType,
  itemQueries
};
