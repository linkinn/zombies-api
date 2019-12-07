const tradeType = `
  type Trade {
    id: ID!
    submit_survivor_id: Survivor!
    receive_survivor_id: Survivor!
    item_id: Item!
    amount: Int!
    total_points: Int!
    accept: Boolean
  }

  input ItemsInput {
    item_id: Int!
    amount: Int!
  }

  input CreateTradeInput {
    submit_survivor_id: Int!
    receive_survivor_id: Int!
    items: [ItemsInput!]!
  }

  input UpadeTradeInput {
    accept: Boolean!
  }
`;

const tradeQueries = `
  trades(first: Int, offset: Int): [Trade!]!
`;

const tradeMutation = `
  createTrade(input: CreateTradeInput): [Trade!]!
  UpadeTradeInput(id: ID!, input: UpadeTradeInput!): Trade!
`;

module.exports = {
  tradeType,
  tradeQueries,
  tradeMutation
};
