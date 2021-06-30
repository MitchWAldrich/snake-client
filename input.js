const { moveUpKey, moveRightKey, moveLeftKey, moveDownKey } = require('./constants');
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === moveLeftKey) {
      connection.write('Move: left');
    }
    if (key === moveUpKey) {
      connection.write('Move: up');
    }
    if (key === moveRightKey) {
      connection.write('Move: right');
    }
    if (key === moveDownKey) {
      connection.write('Move: down');
    }
    if (key === 'j') {
      connection.write('Say: Watch out!');
    }
    if (key === 'k') {
      connection.write('Say: You\'re cute! ;)');
    }
    if (key === 'l') {
      connection.write('Say: Ssssup?');
    }
  };

  stdin.on('data', handleUserInput);
  
  return stdin;
};

module.exports = setupInput;