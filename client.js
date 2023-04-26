const net = require("net");
const {IP, PORT} = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //On connection success to the game server
  conn.on("connect",()=>{
    console.log("Yay! You connected");
  });
  //Changes the name of the snake on connection
  conn.on("connect", () => {
    conn.write("Name: SNK");
  });
  conn.on("data", (data) => {
    console.log(data);
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};
