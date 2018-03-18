var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var recipeSchema = new Schema({
  // `title` must be of type String
  title: {
    type: String,
    unique:true,
    required: true
  },

  img: {
    type: String
  },

  summary: {
    type: String,
    require: true
  },

  link: {
    type: String,
    require: true
  },

   // Create a relation with the Note model
   note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
});

// This creates our model from the above schema, using mongoose's model method
var Recipe = mongoose.model("Recipe", recipeSchema);

// Export the Book model
module.exports = Recipe;
