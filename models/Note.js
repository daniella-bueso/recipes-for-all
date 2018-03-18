const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var noteSchema = new Schema({
    // Author's Name
    author: {
    type: String
  },
    // Comment Content
    content: {
    type: String
  }
  
});

var Note = mongoose.model('Note', noteSchema)

module.exports = Note;