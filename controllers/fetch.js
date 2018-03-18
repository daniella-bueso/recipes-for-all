var scrape = require('../scripts/scrape.js')
var db = require("../models")

  db.Library.create({ name: "Recipe Library" })
  .then(function(dbLibrary) {
    // If saved successfully, print the new Library document to the console
    console.log(dbLibrary);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  })
