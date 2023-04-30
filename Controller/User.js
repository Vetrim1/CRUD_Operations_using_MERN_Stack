const Users=require("../Model/User");
const mongoose=require('mongoose');

exports.getAllusers=async (req,res)=>{
   await  Users.find().then(result=>{res.status(200).json({
    message:"User details fetched successfully",
    userList:result
   })})
   .catch(err=>{res.status(500).json({
    message:"Error in Database",
    error:err
   })})
};

exports.userbyId=async (req,res)=>{
    const id=req.params.id;
    await  Users.find({_id:id}).then(result=>{res.status(200).json({
     message:"User details fetched successfully",
     userList:result
    })})
    .catch(err=>{res.status(500).json({
     message:"Error in Database",
     error:err
    })})
 };

 exports.postUser=async (req,res)=>{
    const user = new Users({
        _id: new  mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        pincode:req.body.pincode,
        country:req.body.country
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: "User created successfully",
            userList: result
          });
        })
        .catch(err => {
         // console.log(err);
          res.status(500).json({
            error: err
          });
        });
 };

 exports.deletebyId= (req,res)=>{
    Users.findByIdAndRemove(req.params.id)
  .then(result=>{res.status(200).json({
     message:"User deleted successfully",
     userList:result
    })})
 .catch(err=>{res.status(500).json({
     message:"Error in Database",
     error:err
    })})}

exports.updateUser=async (req,res)=>{ 
    const id=req.params.id;
    const user = new Users({
        _id: id,
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        pincode:req.body.pincode,
        country:req.body.country
      });
      Users.findByIdAndUpdate(id,user,{new:true})
    .then(result=>{res.status(200).json({
       message:"User updated successfully",
       userList:result
     })})
    .catch(err=>{res.status(500).json({
       message:"Error in Database",
       error:err
     })})}
 