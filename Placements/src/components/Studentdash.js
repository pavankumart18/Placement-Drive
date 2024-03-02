import React, { useEffect,useState } from "react";
import './admin.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import a from "../images/user.png";
import b from "../images/comapny.webp";
import c from "../images/placements.jpg";
function  StudentDashboard(props){
    const nav=useNavigate();
    const [StudentPlaced,setStudentPlaced]=useState(0);
    const [Applications,setApplications]=useState(0);
    const [Scheduled,setScheduled]=useState(0);
    const [Slots,setSlots]=useState(250);
    const [Company,setCompany]=useState([]);
    const [recent,setRecent]=useState([])

    useEffect(()=>{

        axios.get("http://localhost:9000/api/companies")
        .then((response)=>{
            console.log(response.data)
            setCompany(response.data)
        })
        axios.get("http://localhost:9000/api/getdata")
        .then((response)=>{
            console.log(response.data)
            setRecent(response.data)
        })
    });
    function handleClick(e){
        e.preventDefault();
        nav('/submitting')
    }
    
    
    return(
        <div>
            <section class="header">
            <div class="logo">
                    <i class="ri-menu-line icon icon-0 menu"></i>
                    <h2>Student<span>Placements</span></h2>
            </div>
            <div class="search--notification--profile">
                <div class="search">
                    <input type="text" placeholder="Search " />
                    <button><i class="ri-search-2-line"></i></button>
                 </div>
                <div class="notification--profile">
                <h3>Welcome {props.user}</h3>
                <div class="picon profile">
                    <img src={a} alt="" />
                </div>
            </div>
        </div>
    </section>
    <section class="main">
        <div class="sidebar">
                 <img src={c} alt="" />
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
                    <h2 class="section--title">Ongoing</h2>
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
                    <p>Click on the cards to get interview chance</p>
                </div>
                <div class="doctors--cards">
                {Company.map((c) => (
                 <Link onClick={handleClick}>
                 <div class="img--box--cover">
                     <div class="img--box">
                         <img src={b} alt="" />
                     </div>
                 </div>
                 <p class="free" style={{color:"black"}}>{c.company}</p>
                 <p class="free" style={{color:"black"}}>{c.location}</p>
                 <p class="free" style={{color:"black"}}>{c.basesalary}</p>
             </Link>
             
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
                                <th>CompanyName</th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                        {recent.map((s)=>(
                            <tr>
                                <td>{s.company}</td>
                                <td>{s.skills}</td>
                            </tr>
                        ))}
                         <tr>
                                <td>hello </td>
                                <td>MERN STACK</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default StudentDashboard;