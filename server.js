const express = require("express");
const server = express();
const dotenv = require("dotenv");
const app = require("./app");

/**
 * CONFIGUTING ENVIRONMNET VARIABLES IN SERVER
 */
dotenv.config();
// PORT NUMBER TO LISTEN
const port = 5000;

// STARTING THE SERVER
server.use("/", app);

/**
 * INJECTING DB CONFIG
 * ONLY AFTER CONFIGURING THE DOT ENV
 */
require("./dbConfig");
server.listen(port, "localhost", () => {
  console.log("SERVER STARTED", port);
});
