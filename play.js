const connect = require("./client");
const setupInput = require("./input");



// establishes a connection with the game server

setupInput(connect());
console.log("Connecting ...");

