var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

var server = http.createServer(app);
app.use(express.urlencoded());
app.use(express.json());

controllers.init(app);

server.listen(3001);
