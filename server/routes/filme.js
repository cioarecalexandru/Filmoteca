var express = require('express');
var router = express.Router();
let filmModel = require('../models/Film');
const FilmController = require('../controllers/film.js');

var FilmControllerIns = new FilmController(filmModel);

router.get('/filme', (req, res)=> {
    FilmControllerIns.getFilms((err, filme) => {
        if (err) {
            console.error(err);
            return res.status(500).end();
          }
          res.json(filme);
    })
});

router.post('/adauga',(req,res)=>{
    console.log('Test 1');
    FilmControllerIns.addFilm(req.body, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).end();
        }
        console.log(result);
        res.status(201).end();
      });
    

});

module.exports = router;