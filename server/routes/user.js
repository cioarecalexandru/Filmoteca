var express = require('express');
var router = express.Router();
let userModel = require('../models/User');
const UserController = require('../controllers/user.js');

var UserControllerIns = new UserController(userModel);

var userJson;
var userToken;
var loggedUser;

router.post('/addUser',(req,res)=>{

    UserControllerIns.addUser(req.body, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).end();
        }
        console.log(result);
        res.status(201).end();
      });
    

});

router.get('/:id', (req, res) => {
    UserControllerIns.getUser(req.params.id, (err, doc) => {
      if (err) {
        console.error(err);
        return res.status(500).end();
      }
      if(!doc) {
        return res.status(404).end();
      }
      res.json(doc);
    });
  });

  router.get('/', (req, res) => {
  
    UserControllerIns.getUsers((err, docs) => {
      if (err) {
        console.error(err);
        return res.status(500).end();
      }
      res.json(docs);
    });
  });
router.post('/logIn', function (req, res, next) {
console.log("intra in post");

  UserControllerIns.isUser(req.body.email, (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
      res.status(500).end();
    }
    if (!user) {
      console.log("User doesn't exist");
      res.status(404).end();
    }
    try {
      const isPasswordValid = user.comparePassword(req.body.password);
      if (!isPasswordValid) {
        console.log(`Parola ${user.password} este incorecta pentru adresa ${user.email} `);
        res.status(404).end();
      }
      userJson = user.toJSON();
      res.send({
        user: userJson,
        token: UserControllerIns.jwtSignUser(userJson)
      });
      res.status(200).end();

      console.log(userJson);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "Error stuff"
      })
    }

  });


});

module.exports = router;