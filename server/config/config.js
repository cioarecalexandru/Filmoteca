module.exports = {
    port: 8081,
    db:{
        database: process.env.DB_NAME || 'filmoteca',
        user: process.env.DB_USER || 'filmoteca',
        password: process.env.DB_PASS || 'filmoteca',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './filmoteca.sqlite'
        }
    }
}