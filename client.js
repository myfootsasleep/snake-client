const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: ('172.18.104.166'),
    port: 50541

  });
  conn.on("connect",()=>{
    console.log("Yay! You connected");
  });
  conn.on("connect", () => {
    conn.write("Name: SNK");
  });
  // Just a test to see what happens when we move up via timeOut or setInterval
  // conn.on("connect", () =>{
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   },50);
  // });
  conn.on("data", (data) => {
    console.log(data);
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;


};
module.exports = {connect};