module.exports={
    port:process.env.PORT || 3000,
    db:{
       database:process.env.DB_NAME || 'local_library' ,
       user:process.env.DB_USER || 'root',
       passwors:process.env.DB_PASS || 'root',
       options:{
           dialect:process.env.DIALECT ||'mongoose',
           host:process.env.HOST || 'localhost',
           storage:'mongodb://cioarec.alex:password@ds237610.mlab.com:37610/local_library'
       }
    },
    authentification:{
        jwtSecret:process.env.JWT_SECRET || 'secret'
    }
       
    
}