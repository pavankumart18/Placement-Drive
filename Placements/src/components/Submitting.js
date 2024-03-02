import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import a from "../images/user.png"
function Submitting(){ 
    const nav=useNavigate();
    const [name,setName]=useState("");
    const [age,setAge]=useState();
    const [gender,setGender]=useState("");
    const [skills,setSkills]=useState("");
    const [company,setCompany]=useState("");
    const handleSubmit=async (e)=>
    {
      e.preventDefault();
      const data={
        "name":name,
        "age":age,
        "gender":gender,
        "skills":skills,
        "company":company
      }
      await axios.post("http://localhost:9000/api/applications",{
            data
        }).then((res)=>{
            if(res.data){
                console.log(res.data)
                alert("your response got submitted")
                nav('/student')
            }else{
                alert("try again")
            }
        })
    };

    return(
        <div>
            <section class="header">
            <div class="logo">
                    <i class="ri-menu-line icon icon-0 menu"></i>
                    <h2>Student<span>Placements</span></h2>
            </div>
            <div class="search--notification--profile">
                <div class="search">
                    <input type="text" placeholder="Search Scdule.." />
                    <button><i class="ri-search-2-line"></i></button>
                 </div>
                <div class="notification--profile">
                <div class="picon profile">
                    <img src={a} alt="" />
                </div>
            </div>
        </div>
    </section>
    <section class="main">
        <div class="sidebar">
            <ul class="sidebar--items">
                <li>
                    <a href="#dashboard" id="active--link">
                        <span class="icon icon-1"><i class="ri-layout-grid-line"></i></span>
                        <span class="sidebar--item">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#schedule">
                        <span class="icon icon-2"><i class="ri-calendar-2-line"></i></span>
                        <span class="sidebar--item">Schedule</span>
                    </a>
                </li>
                <li>
                    <a href="#analytics">
                        <span class="icon icon-3"><i class="ri-user-2-line"></i></span>
                        <span class="sidebar--item" >Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#content">
                        <span class="icon icon-4"><i class="ri-user-line"></i></span>
                        <span class="sidebar--item">Content</span>
                    </a>
                </li>
                <li>
                    <a href="#activity">
                        <span class="icon icon-5"><i class="ri-line-chart-line"></i></span>
                        <span class="sidebar--item">Activity</span>
                    </a>
                </li>
                <li>
                    <a href="#support">
                        <span class="icon icon-6"><i class="ri-customer-service-line"></i></span>
                        <span class="sidebar--item">Support</span>
                    </a>
                </li>
            </ul>
            <ul class="sidebar--bottom-items">
                <li>
                    <a href="#settings">
                        <span class="icon icon-7"><i class="ri-settings-3-line"></i></span>
                        <span class="sidebar--item">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#logout">
                        <span class="icon icon-8"><i class="ri-logout-box-r-line"></i></span>
                        <span class="sidebar--item">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main--content">
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" 
    value={name} 
    onChange={
        (e)=>{
            setName(e.target.value)
        }} 
        class="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        placeholder="Enter Name " />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="number" 
    value={age}
    onChange={(e)=>{
        setAge(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Age" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Gender</label>
    <input 
    type="text" 
    value={gender}
    onChange={(e)=>{
        setGender(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Gender" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Company</label>
    <input 
    type="text" 
    value={company}
    onChange={(e)=>{
        setCompany(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Comapany name" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Skills</label>
    <input 
    type="text" 
    value={skills}
    onChange={(e)=>{
        setSkills(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="skills" />
  </div>
  
  <button type="submit" style={{margin:"2%"}}class="btn btn-primary">Submit</button>
</form>
        </div>
    </section>
        </div>
    )
}

export default Submitting;