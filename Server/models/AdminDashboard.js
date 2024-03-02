const mongoose=require('mongoose')
const Company=new mongoose.Schema({
    company:{type:String},
    location:{type:String},
    numberofCandidaties:{type:Number},
    candidates:{type:Object}
},{
    collection:'company-data'
})

const model=mongoose.model('Company-data',Company)

module.exports=model