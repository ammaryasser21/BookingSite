const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:String,
})
const UserModel = mongoose.model('User',userSchema);
module.exports=UserModel;