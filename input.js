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
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }
    if (key === 's') {
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