const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: ('172.18.104.166'),
    port: 50541

  });
  // conn.on("connect",()=>{
  //   console.log("Yay! You connected");
  // });
  conn.on("data", (data) => {
    console.log(data);
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};
module.exports = {
  connect
};