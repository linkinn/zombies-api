const inventoryType = `
  type Inventory {
    id: ID!
    survivor_id: Survivor!
    item_id: Item!
    amount: Int!
    created_at: String!
    updated_at: String!
  }

  input InventoryCreateInput {
    survivor_id: Int!
    item_id: Int!
    amount: Int!
  }
`;

const inventoryQueries = `
  inventories(first: Int, offset: Int): [Inventory!]!
  inventory(id: ID!): Inventory
`;

const inventoryMutation = `
  createInventory(input: InventoryCreateInput!): Inventory
`;

module.exports = {
  inventoryType,
  inventoryQueries,
  inventoryMutation
};
