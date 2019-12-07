const survivorType = `
  scalar Coordinates
  
  type Survivor {
    id: ID!
    name: String!
    age: Int!
    sex: String!
    location: Coordinates!
    infected: Boolean
    reported: Int!
    acess_inventary: Boolean!
    supplement_total: Int
    points_total: Int
    inventory: [Inventory!]
    created_at: String
    updated_at: String
  }

  input Items {
    item_id: Int!
    amount: Int!
  }

  input SurvivorCreateInput {
    name: String!
    age: Int!
    sex: String!
    location: Coordinates!
    inventoryItems: [Items]!
  }

  input SurvivorUpdateInput {
    location: Coordinates!
  }
`;

const survivorQueries = `
  survivors(first: Int, offset: Int): [Survivor!]!
  survivorsNoInfected(infected: Boolean, first: Int, offset: Int): [Survivor!]!
  survivor(id: ID!): Survivor
`;

const survivorMutation = `
  createSurvivor(input: SurvivorCreateInput!): Survivor
  updateSurvivor(id: ID!, input: SurvivorUpdateInput!): Survivor
  updateReport(id: ID!): Survivor
`;

module.exports = {
  survivorType,
  survivorQueries,
  survivorMutation
};
