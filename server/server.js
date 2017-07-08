var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./routes");

var app = express();

// Serve Static Directories
app.use("/views", express.static(path.join(__dirname, "../client/views")));
app.use("/img", express.static(path.join(__dirname, "../img")));
app.use("/fonts", express.static(path.join(__dirname, "../fonts")));
app.use("/scripts", express.static(path.join(__dirname, "../client/scripts")));
app.use("/jquery", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/bootstrap", express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));
app.use("/font-awesome", express.static(__dirname + "/../node_modules/font-awesome"));
app.use("/css", express.static(path.join(__dirname, "../client/css")));
app.use(express.static(path.join(__dirname, "../client/views")));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000);
console.log("Server running on port 3000...");

module.exports = app;