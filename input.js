const setupInput = function() {
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
  if (key === "w") {
    console.log("moving up");
  }
  if (key === "a") {
    console.log("moving left");
  }
  if (key === "s") {
    console.log("moving down");
  }
  if (key === "d") {
    console.log("moving right");
  }
};

module.exports = {setupInput};