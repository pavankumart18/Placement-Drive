import React from 'react'
import { useJwt} from "react-jwt";
import StudentDash from "./Studentdash"
function StudentDashBoard(){
    const token=localStorage.getItem('token')
    const { decodedToken, isExpired } = useJwt(token);
    if(isExpired){
        console.log(decodedToken)
        const name=decodedToken.name
        console.log(name)
        return (
            <div >
                  <StudentDash user={name}/>
            </div>
        )
    }else{
        return <h1>try again</h1>
    }
}

export default StudentDashBoard;
