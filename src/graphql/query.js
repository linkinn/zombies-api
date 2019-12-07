const { inventoryQueries } = require("./resources/inventory/inventory.schema");
const { itemQueries } = require("./resources/item/item.schema");
const { survivorQueries } = require("./resources/survivor/survivor.schema");
const { tradeQueries } = require("./resources/trade/trade.shcema");

const Query = `
  type Query {
    ${inventoryQueries}
    ${itemQueries}
    ${survivorQueries}
    ${tradeQueries}
  }
`;

module.exports = Query;
