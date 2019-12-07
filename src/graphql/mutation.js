const { inventoryMutation } = require("./resources/inventory/inventory.schema");
const { survivorMutation } = require("./resources/survivor/survivor.schema");
const { tradeMutation } = require("./resources/trade/trade.shcema");

const Mutation = `
  type Mutation {
    ${inventoryMutation}
    ${survivorMutation}
    ${tradeMutation}
  }
`;

module.exports = Mutation;
