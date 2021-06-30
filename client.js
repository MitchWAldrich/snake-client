const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    console.log('Name: MWA');
    setTimeout(() => {
      conn.write('Move: up');
    }, 50);
    setInterval(() => {
      conn.write('Move: up');
    }, 100);
    setTimeout(() => {
      conn.write('Move: right');
    }, 150);
    setInterval(() => {
      conn.write('Move: right');
    }, 100);    
  });

  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;