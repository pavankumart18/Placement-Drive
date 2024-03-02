const mongoose=require('mongoose')

const Admin=new mongoose.Schema({
    company:{type:String},
    username:{type:String,required:true},
    password:{type:String,required:true}
},{
    collection: 'admin-data'
})

const model=mongoose.model('Admin-data',Admin)

module.exports=model