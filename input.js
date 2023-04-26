//Stores the active TCP connection object.
let connection;
const {MOVEUP, MOVELEFT, MOVEDOWN, MOVERIGHT, TAUNT1, TAUNT2,} = require("./constants");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//the block of code used for the keyboard input
const handleUserInput = function(key) {
  if (key === '\u0003') {
    //console logged that we were able to use the Ctrl + C keystroke
    console.log("successfully exit");
    process.exit();
    return;
  }
  //keyboard input in object keys rather than if statements
  const messages = {w: MOVEUP, a: MOVELEFT, s: MOVEDOWN, d: MOVERIGHT, q: TAUNT1, e: TAUNT2};
  connection.write(messages[key]);
};

module.exports = {setupInput};