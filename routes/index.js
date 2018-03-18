var fetch = require('../controllers/fetch.js')
var recipe = require('../controllers/headline.js')
var notes = require('../controllers/note.js')

module.exports = function (app) {
// Routes

// POST route for saving a new Book to the db and associating it with a Library
app.post("/submit", function(req, res) {
  // Create a new Comment in the database 
  db.Note.create(req.body)
    .then(function(dbNote) {
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Library.findOneAndUpdate({}, { $push: {note: dbNote._id } }, { new: true });
    })
    .then(function(dbLibrary) {
      // If the Library was updated successfully, send it back to the client
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all books from the db
app.get("/", function(req, res) {
  // Using our Recipe model, "find" every recipe in our db
  recipe.find({})
    .then(function(dbRecipe) {
      // If any Recipes are found, send them to the client
      res.json(dbRecipe);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what library looks like WITH populating
app.get("/populated", function(req, res) {
  // Using our Note model, "find" every recipe in our db and populate them with any associated comments
  db.Library.find({})
    // Specify that we want to populate the retrieved recipes with any associated comments
    .populate("notes")
    .then(function(dbLibrary) {
      // If any Recipes are found, send them to the client with any associated comments
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    })
  });
};