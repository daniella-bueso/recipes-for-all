var scrape = require('../scripts/scrape.js')
var models = require("../models")
var mongoose = require('mongoose')

var db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/test")

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
  console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
});
