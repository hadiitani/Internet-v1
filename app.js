var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res) {
    res.end("Hello, world!");
});

http.createServer(app).listen(3000);