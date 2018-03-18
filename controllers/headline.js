var scrape = require('../scripts/scrape.js')
var Recipe = require('../models/Headline.js')

module.exports = {
    findAll : function(cb) {
        Recipe.find({})
        .populate("note")
        .then(function (data)  {
        cb(data)
    })
  }
}