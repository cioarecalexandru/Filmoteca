
let userModel = require('../models/User');
const jwt=require('jsonwebtoken');
const config=require('../config/config');

class UserController {

    constructor(userModel) {
        this.userModel = userModel;
    }

    getUsers(done) {
        this.userModel.find({}, done);
    }
    addUser(user, done) {
        let newUser = new this.userModel(user);
        newUser.save(done);
    }
   
    getUser(id,done){
        
        this.userModel.findOne({_id:id},done);
    }

    jwtSignUser(user){
        const ONE_HOUR=60*60;
        return jwt.sign(user,config.authentification.jwtSecret,{
            expiresIn:ONE_HOUR
        })
    }
     isUser(email, done) {
            userModel.findOne({ "email": email }, done);
       
    }


}

module.exports = UserController;