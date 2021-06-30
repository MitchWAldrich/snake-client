const args = process.argv.slice(2);
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${args}`);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 100);
    // setTimeout(() => {
    //   conn.write('Move: right');
    // }, 150);
    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 100);    
  });

  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;