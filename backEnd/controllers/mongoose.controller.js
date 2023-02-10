var mongoose = require('mongoose');
const mongo_url = "mongodb+srv://sanketsupekar:database144@cluster0.ynvzm.mongodb.net/?retryWrites=true&w=majority"

async  function connectToDb(){
    try{
        await mongoose.connect(mongo_url);
        console.log("Connection Successful..");
    }catch(e){
        console.log("MongoDb Connection Error..."+e);
    }
}

module.exports =  connectToDb; 