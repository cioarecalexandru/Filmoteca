var mongoose = require('mongoose');

const Promise=require('bluebird');
const bcrypt=Promise.promisifyAll(require('bcrypt'))
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: {
        type: String,
        validate: {
            validator: function (email) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailReg.test(email);
            },
            message: 'not a valid email'
        },
        required: [true, 'User email required']
    },
    password: { type: String, required: true }
  }
);

const User=mongoose.model('User', UserSchema);

User.prototype.comparePassword=function(password){
    return bcrypt.compareAsync(password,this.password)
}

module.exports = User;