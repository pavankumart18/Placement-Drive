import React from 'react'
import { useJwt} from "react-jwt";
import AdminDash from "./AdminMainDash";
function AdminDashboard(){
    const token=localStorage.getItem('token')
    let id
    const { decodedToken, isExpired } = useJwt(token);
    if(isExpired){
        console.log(decodedToken)
        const name=decodedToken.name
        console.log(name)
        return (
            <div>
                  <AdminDash />
            </div>
        )
    }else{
        return <h1>try again</h1>
    }
}

export default AdminDashboard;
