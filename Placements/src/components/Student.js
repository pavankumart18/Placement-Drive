import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import placement from "../images/placement.jpeg";
import download from "../images/download.jpeg";
import download1 from "../images/download.png";
import google from "../images/google.png";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
function Student(props){
  const nav=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    
    const submitReview=async (e)=>
    {
      e.preventDefault();
      await axios.post("http://localhost:9000/api/student",{
            username,
            password,
        }).then((res)=>{
            if(res.data.user){
                console.log(res.data)
                const token=res.data.user
                localStorage.setItem('token',token)
                alert("hello Student")
                nav("/student")
            }else{
                alert("try again")
            }
        })
    };

    return (
        <div class="container">
            <div class="row">
            <div class="col-lg-6">
            <img className="images-1" src={placement} alt="React" />
            <img className="images-2" src={download} alt="React" />
            <img className="images-3" src={download1} alt="React" />
            <img className="images-4" src={google} alt="React" />
            </div>
            
           <div class="login-box col-lg-6">
    <h2>Student</h2>
    <form onSubmit={submitReview}>
      <div class="user-box">
        <input type="text" value={username} name="username" onChange={(e)=>{
          setUserName(e.target.value);
        }} 
        required />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input value={password} type="password" name="password" 
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        required="" />
        <label>Password</label>
        <p><Link to="/registerstudent" style={{color:"white"}}>not yet registered?</Link></p>
      </div>
      <button onClick={() => props.onFormSwitch('Admin')} class="a">Admin</button>
      <button  class="a">Submit</button>
      
    </form>
  </div>
  
  </div>
        </div>
    )
}

export default Student;