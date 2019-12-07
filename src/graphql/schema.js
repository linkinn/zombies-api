const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require("lodash");

const Query = require("./query");
const Mutation = require("./mutation");

const { inventoryType } = require("./resources/inventory/inventory.schema");
const { itemType } = require("./resources/item/item.schema");
const { survivorType } = require("./resources/survivor/survivor.schema");
const { tradeType } = require("./resources/trade/trade.shcema");

const inventoryResolvers = require("./resources/inventory/inventory.resolvers");
const itemResolvers = require("./resources/item/item.resolvers");
const survivorResolvers = require("./resources/survivor/survivor.resolvers");
const traderResolvers = require("./resources/trade/trade.resolvers");

const resolvers = merge(
  inventoryResolvers,
  itemResolvers,
  survivorResolvers,
  traderResolvers
);

const schemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    schemaDefinition,
    Query,
    Mutation,
    inventoryType,
    itemType,
    survivorType,
    tradeType
  ],
  resolvers
});
