import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import a from "../images/admin.png";
function AddCompany(){ 
    const nav=useNavigate();
    const [company,setCompany]=useState("");
    const [location,setLocation]=useState("");
    const [basesalary,setSalary]=useState("");
    const handleSubmit=async (e)=>
    {
      e.preventDefault();
      const data={
        "company":company,
        "location":location,
        "basesalary":basesalary
      }
      await axios.post("http://localhost:9000/api/companies",{
            data
        }).then((res)=>{
            if(res.data){
                console.log(res.data)
                alert("your response got submitted")
                nav('/admin')
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
                    <h2>Admin<span>Dashboard</span></h2>
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
                        <Link to="/admin"><span class="sidebar--item">Dashboard</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#analytics">
                        <span class="icon icon-3"><i class="ri-user-2-line"></i></span>
                        <Link to="/underworking"><span class="sidebar--item" >Analytics</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#support">
                        <span class="icon icon-6"><i class="ri-customer-service-line"></i></span>
                        <Link to="/underworking"><span class="sidebar--item" >Support</span></Link>
                    </a>
                </li>
            </ul>
            <ul class="sidebar--bottom-items">
                <li>
                    <a href="#logout">
                        <span class="icon icon-8"><i class="ri-logout-box-r-line"></i></span>
                        <Link to="/"><span class="sidebar--item">Logout</span></Link>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main--content">
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Company Name</label>
    <input type="text" 
    value={company} 
    onChange={
        (e)=>{
            setCompany(e.target.value)
        }} 
        class="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        placeholder="Enter Name " />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">location</label>
    <input type="text" 
    value={location}
    onChange={(e)=>{
        setLocation(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="location" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">basesalary</label>
    <input 
    type="text" 
    value={basesalary}
    onChange={(e)=>{
        setSalary(e.target.value)
    }}
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="base salary" />
  </div>
  <button type="submit" style={{margin:"2%"}}class="btn btn-primary">Submit</button>
</form>
 </div>
    </section>
        </div>
    )
}

export default AddCompany;