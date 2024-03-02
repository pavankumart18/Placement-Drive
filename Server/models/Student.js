const mongoose=require('mongoose')

const Student=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
},{
    collection: 'student-data'
})

const model=mongoose.model('Student-data',Student)

module.exports=model