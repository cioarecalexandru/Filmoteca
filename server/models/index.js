const config = require('../config/config');

var db      = require('mssql');

var connectDB  = async function(){
    var pool = await db.connectDB(config);
        console.log(pool);
        return pool;

}

module.exports = connectDB;