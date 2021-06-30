const net = require("net");
const { stdin } = require("process");
const connect = require("./client");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on('data', handleUserInput);
  
  return stdin;
};


// establishes a connection with the game server

setupInput();
connect();
console.log("Connecting ...");

