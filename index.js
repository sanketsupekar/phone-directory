const express= require('express');
const connectToDb = require("./controllers/mongoose.controller")
const apiRouter = require("./routes");
const path = require('path');
const Contact = require("./model/contact.model");
const port = process.env.PORT || 3001;

const app = express();
connectToDb();
app.use("/api",apiRouter);
app.use(express.static(path.resolve(__dirname,"build")));
app.use('/search',(req,res) =>{
    res.sendFile(path.resolve(__dirname,"build","index.html"));
})
app.listen(port,()=> {
    console.log("Server is ready to listening....");
})
