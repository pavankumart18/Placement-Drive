import React, { useEffect, useState } from "react";
import './admin.css';
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import a from "../images/admin.png";
import b from "../images/company.jpg";
function AdminDash(){
    const nav=useNavigate();
    const [StudentPlaced,setStudentPlaced]=useState(0);
    const [Applications,setApplications]=useState(0);
    const [Scheduled,setScheduled]=useState(0);
    const [Slots,setSlots]=useState(250);
    const [Company,setCompany]=useState([]);
    const [Students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9000/api/ongoing")
        .then((response)=>{
            console.log(response.data)
        })
        axios.get("http://localhost:9000/api/companies")
        .then((response)=>{
            console.log(response.data)
            setCompany(response.data)
        })
        axios.get("http://localhost:9000/api/Students")
        .then((response)=>{
            console.log(response.data)
            setStudents(response.data)
        })
    })
    function handleClick(e){
        e.preventDefault()
        nav('/addcompany')

    }
    
    return(
        <div>
            <section class="header">
            <div class="logo">
                    <i class="ri-menu-line icon icon-0 menu"></i>
                    <h2>Placement<span>Drive</span></h2>
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
            <div class="overview">
                <div class="title">
                    <h2 class="section--title">Previous Year Statistics</h2>
                </div>
                <div class="cards">
                    <div class="card card-1">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Students Placed</h5>
                                <h1>152</h1>
                            </div>
                            <i class="ri-user-line card--icon--lg"></i>
                        </div>
                    </div>
                    <div class="card card-2">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Total Applications</h5>
                                <h1>1145</h1>
                            </div>
                            <i class="ri-file-line card--icon--lg"></i>
                        </div>
                        <div class="card--stats">
                            <span><i class="ri-bar-chart-fill card--icon stat--icon"></i>82%</span>
                            <span><i class="ri-arrow-up-s-fill card--icon up--arrow"></i>230</span>
                            <span><i class="ri-arrow-down-s-fill card--icon down--arrow"></i>45</span>
                        </div>
                    </div>
                    <div class="card card-3">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Scheduled</h5>
                                <h1>102</h1>
                            </div>
                            <i class="ri-calendar-2-line card--icon--lg"></i>
                        </div>
                        <div class="card--stats">
                            <span><i class="ri-bar-chart-fill card--icon stat--icon"></i>27%</span>
                            <span><i class="ri-arrow-up-s-fill card--icon up--arrow"></i>31</span>
                            <span><i class="ri-arrow-down-s-fill card--icon down--arrow"></i>23</span>
                        </div>
                    </div>
                    <div class="card card-4">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Slots Available</h5>
                                <h1>15</h1>
                            </div>
                            <i class="ri-user-add-line card--icon--lg"></i>
                        </div>
                        <div class="card--stats">
                            <span><i class="ri-bar-chart-fill card--icon stat--icon"></i>8%</span>
                            <span><i class="ri-arrow-up-s-fill card--icon up--arrow"></i>11</span>
                            <span><i class="ri-arrow-down-s-fill card--icon down--arrow"></i>2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overview">
                <div class="title">
                    <h2 class="section--title">Current Year</h2>
                </div>
                <div class="cards">
                    <div class="card card-1">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Students Placed</h5>
                                <h1>{StudentPlaced}</h1>
                            </div>
                            <i class="ri-user-line card--icon--lg"></i>
                        </div>
                    </div>
                    <div class="card card-2">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Total Applications</h5>
                                <h1>{Applications}</h1>
                            </div>
                            <i class="ri-file-line card--icon--lg"></i>
                        </div>
                    </div>
                    <div class="card card-3">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Scheduled</h5>
                                <h1>{Scheduled}</h1>
                            </div>
                            <i class="ri-calendar-2-line card--icon--lg"></i>
                        </div>
                    </div>
                    <div class="card card-4">
                        <div class="card--data">
                            <div class="card--content">
                                <h5 class="card--title">Slots Available</h5>
                                <h1>{Slots}</h1>
                            </div>
                            <i class="ri-user-add-line card--icon--lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="doctors">
                <div class="title">
                    <h2 class="section--title">Companies Available</h2>
                    <div class="doctors--right--btns">
                        <button onClick={handleClick}class="add"><i class="ri-add-line"></i>Add Company</button>
                    </div>
                </div>
                <div class="doctors--cards">
                {Company.map((c) => (
                 <a href="#free" class="doctor--card">
                 <div class="img--box--cover">
                     <div class="img--box">
                         <img src={b} alt="" />
                     </div>
                 </div>
                 <p class="free" style={{color:"black"}}>{c.company}</p>
                 <p class="free" style={{color:"black"}}>{c.location}</p>
                 <p class="free" style={{color:"black"}}>{c.basesalary}</p>
             </a>
             
             ))}
                    
                </div>
            </div>
            <div class="recent--patients">
                <div class="title">
                    <h2 class="section--title">Recent Activity</h2>
                </div>
                <div class="table">
                    <table>
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Gender</th>
                          <th>Age</th>
                          <th>Skills</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                    {Students.map((s) => (
                      <tr>
                          <td>{s.name}</td>
                          <td>30/07/2022</td>
                          <td>{s.gender}</td>
                          <td>{s.age}</td>
                          <td>{s.skills}</td>
                          <td class="pending">{s.status}</td>
                          <td><span><i class="ri-edit-line edit"></i><i class="ri-delete-bin-line delete"></i></span></td>
                      </tr>
                 ))}
                 </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default AdminDash;