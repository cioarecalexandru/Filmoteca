var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmSchema = new Schema({
    nume:{
        type: String,
        required: [true, 'Nume film necesar']
    },
    an:{
        type: Number,
        required: [true, "An film necesar"]
    },
    nota:{
        type: Number,
        required: [true, "Nota film necesara"]
    },
    gen:{
        type: String,
        required: [true, "Genul este necesar"]
    }
});

const Film=mongoose.model('Film', FilmSchema);

module.exports = Film;