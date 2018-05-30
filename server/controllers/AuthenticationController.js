const  connectDB = require('../models/index');
const User = require('../models/User');
const jwt=require('jsonwebtoken');
const config =require('../config/config');

function jwtSignUser(user){
 const ONE_DAY=60*60*24;
 return jwt.sign(user,config.authentification.jwtSecret,{
     expiresIn: ONE_DAY
 })
}


module.exports = {
    async register(req, res) {
        try {
            console.log("Creating user");


        } catch (err) {
            // email already exist
            res.status(400).send({
                error: 'This email account is already in use'
            });
        }
    },

    async getUsers(req, res) {

    }
}