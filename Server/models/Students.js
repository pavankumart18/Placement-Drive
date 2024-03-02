const mongoose=require('mongoose')

const Studentdata=new mongoose.Schema({
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    skills:{type:String},
    company:{type:String}
},{
    collection: 'students-data'
})

const model=mongoose.model('Students-data',Studentdata)

module.exports=model