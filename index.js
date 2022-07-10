require("dotenv").config();
var http = require("http");
let port = process.env.PORT || 8080;
const demo_data = {
    name: "Demo Developer",
    country: "India",
    city: "Noida"
};

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(demo_data));
    res.end();
  })
  .listen(port);