const express= require('express');
const mongoose=require('mongoose');
const cors=require("cors");

const apiRoutes = require('./routes/routes');

const app= express();
const mongodb_uri="mongodb://127.0.0.1:27017/class_29";

app.use(cors())
app.use(express.json()) // it will enable all the incoming json.
app.use(express.urlencoded({ extended: true })); // allow the POST data to convert to a js object.
const port=2907;



app.use("/",apiRoutes)
mongoose.connect(mongodb_uri).then(()=>{
    app.listen(port,()=>{
        console.log("server started at port successfully !!");
    })
}).catch((error)=>{
    console.log("error occured !!");
})
