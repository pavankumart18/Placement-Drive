import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
            <nav>
            <ul>
                <li><Link to="/"><i class="fa-sharp fa-solid fa-user-pen" style={{margin:"2px"}}></i>Placements</Link></li>
                <div class="normal">
                <li><Link to="/companies">Companies</Link></li>
                 <li><a href="https://www.mica.ac.in/recruiter-zone/placements-statistics">Stats</a></li>
                 <li><Link to="/Skills">Skills</Link></li>
                </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header;