const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    pincode:{type:Number,required:true},
    country:{type:String,required:true}
});

module.exports=mongoose.model("Users",userSchema)