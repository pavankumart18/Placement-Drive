const mongoose=require('mongoose')
const Companies=new mongoose.Schema({
    company:{type:String},
    location:{type:String},
    basesalary:{type:String}
},{
    collection:'companies-data'
})

const model=mongoose.model('companies-data',Companies)

module.exports=model