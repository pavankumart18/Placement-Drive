const mongoose=require('mongoose')
const S=new mongoose.Schema({
    name:{type:String},
    Company:{type:String},
    skills:{type:String}
},{
    collection:'s-data'
})

const model=mongoose.model('S-data',S)

module.exports=model