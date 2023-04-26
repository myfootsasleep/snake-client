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

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("successfully exit");
    process.exit();
    return;
  }
  const messages = {w: MOVEUP, a: MOVELEFT, s: MOVEDOWN, d: MOVERIGHT, q: TAUNT1, e: TAUNT2};
  connection.write(messages[key]);
  // } else if (key === "w") {
  //   connection.write(MOVEUP);
  // } else if (key === "a") {
  //   connection.write(MOVELEFT);
  // } else if (key === "s") {
  //   connection.write(MOVEDOWN);
  // } else if (key === "d") {
  //   connection.write(MOVERIGHT);
  // } else if (key === "q") {
  //   connection.write(TAUNT1);
  // } else if (key === "e") {
  //   connection.write(TAUNT2);
  // }
};

module.exports = {setupInput};