const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const guid = require('uuid/v1');
var mongoose = require('mongoose');

const config = require('./config/config');



var mongoDB = 'mongodb://cioarec.alex:password@ds237610.mlab.com:37610/local_library';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('debug', true);

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);
var userRouter = require('../server/routes/user');
app.use('/user',userRouter);

app.listen(config.port);
console.log('server started on port ', config.port);