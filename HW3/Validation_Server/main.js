var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));

server.post("/create-user", require("./controllers/create-user"));

server.listen(8080, function () {
    console.log("Start server");
});