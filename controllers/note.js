const scrape = require('../scripts/scrape.js')
const Note = require('../models/Note.js')

module.exports = {
    findAll : function(cb) {
        Note.find({}).then(function (note)  {
        cb(note)
        })
    },
    newNote : function(newnote, cb) {
        Note.create(newnote.note)
    }
}