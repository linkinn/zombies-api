require("dotenv/config");
require("./database");

const express = require("express");
const graphqlHTTP = require("express-graphql");

const db = require("./database/models");

const schema = require("./graphql/schema");

class App {
  constructor() {
    this.server = express();
    this.middleware();
  }

  middleware() {
    this.server.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
        context: { db }
      })
    );
  }
}

module.exports = new App().server;
