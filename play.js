const net = require("net");
const { stdin } = require("process");
const connect = require("./client");
const setupInput = require("./input");



// establishes a connection with the game server

setupInput();
connect();
console.log("Connecting ...");

