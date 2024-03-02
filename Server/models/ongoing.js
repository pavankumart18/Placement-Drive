const mongoose=require('mongoose')
const Ongoing=new mongoose.Schema({
    StudentPlaced:{type:Number},
    TotalApplication:{type:Number},
    Scheduled:{type:Number},
    Slots:{type:Number}
},{
    collection:'ongoing-data'
})

const model=mongoose.model('ongoing-data',Ongoing)

module.exports=model