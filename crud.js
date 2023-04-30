const express=require('express');
const mongoose= require('mongoose');
const bodyParser=require("body-parser");
const cors=require("cors");
const Router=require('./Router')
const app=express();
const port=8900;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',Router)

mongoose.connect("mongodb://127.0.0.1:27017/Users",{useNewUrlParser: true,useUnifiedTopology: true})
.then(res=>{
    console.log("Mongodb Connected"+res);
    app.listen(port,()=>console.log("Server is running on"+port))
}).catch(err=>console.log(err))



