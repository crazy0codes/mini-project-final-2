const mongoose=require('mongoose')

const shopListSchema=new mongoose.Schema({
    shopname:{type:String,required:true},
    location:{type:String,required:true}, 
    shoptype:{type:String,required:true}, 
    mobilenumber:{type:String,required:true},
    email:{type:String,required:true},
    opentime:{type:String,required:true},
    closetime:{type:String,required:true},
    images : [{ type: String, required: true }],
    services:[{
      service: { type: String, required: true },
      price: { type: Number, required: true }
    }]
})

const Shop=mongoose.model('Shop',shopListSchema)
module.exports=Shop