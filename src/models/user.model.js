const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id : {type:Number, required:true},
    first_name : {type:String, required:true},
    last_name : {type:String, required:true},

});

const User = mongoose.model('users',userSchema);
module.exports = User;