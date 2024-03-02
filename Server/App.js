const express=require('express');
const app=express();
const cors=require("cors");
const mongoose=require('mongoose')
const jwt =require("jsonwebtoken")
const bodyParser=require('body-parser')
const Admin =require("./models/Admin")
const Student =require("./models/Student")
const AdminInfo=require("./models/AdminDashboard")
const Ongoing=require("./models/ongoing")
const Companies=require("./models/Companies")
const Students=require("./models/Students")
const S=require("./models/s")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.get("/hello",(req,res)=>{
    res.send("hello world")
})

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://pavankumart:13a14as1@cluster0.b6dce5l.mongodb.net/Placement',()=>{
    console.log("connected")
})

app.post('/api/admin',async(req,res)=>{
    Admin.findOne({username:req.body.username,password:req.body.password},(error,data)=>{
        if(error){
            console.log(error)
        }else{
            console.log(data)
            const token=jwt.sign({
                id:data._id,
                company:data.company,
                username:data.username,  
            },'secret123')
            res.json({status:'ok',user:token})
        }
    })
})
app.post('/api/registerstudent',async(req,res)=>{
    console.log(req.body)
    const a= await Student.create(req.body);
    res.json(a)
})
app.post('/api/registeradmin',async(req,res)=>{
    console.log(req.body)
    const a= await Admin.create(req.body);
    res.json(a)
})
app.get('/api/getdata',async(req,res)=>{
    Students.find((error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.json(data)
            console.log(data)
        }
    })
})
app.post('/api/student',async(req,res)=>{
    Student.findOne({username:req.body.username,password:req.body.password},(error,data)=>{
        if(error){
            console.log(error)
        }else{
            const token=jwt.sign({
                id:data._id,
                name:data.name,
                username:data.username,  
            },'secret123')
            res.json({status:'ok',user:token})
        }
    })
})
app.get("/api/admindash/:id",async(req,res)=>{
    Admin.findById({_id:req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }else{
            AdminInfo.findOne({company:data.company},(error,data)=>{
                if(error){
                    console.log(error)
                }else{
                    res.json(data)
                    console.log(data)
                }
            })
        }
    })
})
// app.get("/api/s/:id",async(req,res)=>{
//     Student.findById({_id:req.params.id},(error,data)=>{
//         if(error){
//             console.log(error)
//         }else{
//             S.findOne({name:data.name},(error,data)=>{
//                 if(error){
//                     console.log(error)
//                 }else{
//                     res.json(data)
//                     console.log(data)
//                 }
//             })
//         }
//     })
// })
app.get("/api/ongoing",async(req,res)=>{
    Ongoing.find((error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.json(data)
            console.log(data)
        }
    })
})
app.get("/api/companies",async(req,res)=>{
    Companies.find((error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.json(data)
            console.log(data)
        }
    })
})
app.get("/api/students",async(req,res)=>{
    Students.find((error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.json(data)
            console.log(data)
        }
    })
})
app.post("/api/applications",async(req,res)=>{
    console.log(req.body.data)
    const a= await Students.create(req.body.data);
    res.json(a)
})
app.post("/api/companies",async(req,res)=>{
    console.log(req.body.data)
     const a= await Companies.create(req.body.data);
     res.json(a)
})
app.post("/api/s",async(req,res)=>{
    console.log(req.body.data)
     const a= await Companies.create(req.body.data);
     res.json(a)
})

app.listen(9000,()=>{
    console.log("connected to 9000 port")
})
