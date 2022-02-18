var mongoose = require('mongoose'); 
var ContactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required :true
    },
    lastName:{
        type:String,
        required :true
        
    },
    email:{
        type:String,
        required :true,
        unique:true
        
    },
    phone:{
        type:String,
        required :true,
        unique : true,
        max:100,
        min:10
    },
    pictureUrl:{
        type:String,
        required :true
    }
})

module.exports = mongoose.model("contacts",ContactSchema);