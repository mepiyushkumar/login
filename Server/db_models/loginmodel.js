const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Register = new Schema({
    name :{type:String},
    info:{type:String}
});

module.exports = mongoose.model("loginmodel",Register);