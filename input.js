//Stores the active TCP connection object.
let connection;

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
    // console.log("successfully exit");
    process.exit();
  }
  else if (key === "w") {
    connection.write("Move: up");
  }
  else if (key === "a") {
    connection.write("Move: left");
  }
  else if (key === "s") {
    connection.write("Move: down");
  }
  else if (key === "d") {
    connection.write("Move: right");
  }
  else if (key === "q") {
    connection.write("Say: Hehe!");
  }
  else if (key === "e") {
    connection.write("Say: I will beat you!");
  }
};

module.exports = {setupInput};