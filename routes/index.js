var fetch = require('../controllers/fetch.js')
var headline = require('../controllers/headline.js')
var notes = require('../controllers/note.js')

module.exports = function (app) {

  app.get('/', function(req, res){
    let renderObject = {};
    headline.findAll(function(data){
      renderObject.tours = data;
      console.log(data)
      res.render('home', {data:data})  
    })
  })

  app.get('/recipes', function(req, res) {
    notes.findAll(function(data){
      res.json(data)
    })
  })
  app.get('/scrape', function () {
    console.log('"/scrape" get ')
    fetch.scrapedToDb(function() {
    })
  })

  app.post('/newcomment/:id', function (req, res) {
    notes.newNote({note:req.body, recipe: req.params.id} , function(data) {
      console.log('data', data)
    })
    console.log('"/newcomment" post ')
  })
  
}