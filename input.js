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

module.exports = setupInput;


// if (key === '\u2190') {
//   process.stdout.write('Move: left');
// }
// if (key === '\u2191') {
//   process.stdout.write('Move: up');
// }
// if (key === '\u2192') {
//   process.stdout.write('Move: right');
// }
// if (key === '\u2193') {
//   process.stdout.write('Move: down');
// }