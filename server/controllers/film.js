
let filmModel = require('../models/Film');
const config=require('../config/config');

class FilmController {

    constructor(filmModel) {
        this.filmModel = filmModel;
    }

    getFilms(done) {
        this.filmModel.find({}, done);
    }
    addFilm(film, done) {
        let newFilm = new this.filmModel(film);
        newFilm.save(done);
    }
   
    getFilm(id,done){
        
        this.filmModel.findOne({_id:id},done);
    }


}

module.exports = FilmController;