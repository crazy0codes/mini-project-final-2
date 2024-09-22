const mongoose=require("mongoose")

const UserdetailsSchema =new mongoose.Schema( {
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

const UserModel=mongoose.model('registers',UserdetailsSchema)
module.exports=UserModel
