import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
function Student(props){

    return (
        <div>
            <Header />
            <div className="container">
                 <h1>Skills Encouraged</h1>
                 <ul>
                    <li>FULL STACK WEB DEVELOPER</li>
                    <br />
                    <li>DATA ANALYST</li>
                    <br />
                    <li>MOBILE APPLICATION DEVELOPER</li>
                    <br />
                    <li>DATA SCIENTIST</li>
                 </ul>
            </div>
        </div>
    )
}

export default Student;