import React from "react";
import Home from "./Home";
import {Route,Routes} from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import StudentDashBoard from "./StudentDashboard";
import AddCompany from "./AddCompany";
import Submitting from "./Submitting";
import Companies from "./companies";
import Skills from "./Skills";
import Registerstud from "./Registerstud";
import RegisterAd from "./Registeradmin";
import UnderC from "./underWorking";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/student" element={<StudentDashBoard />} />
      <Route path="/addcompany" element={<AddCompany />} />
      <Route path="/submitting" element={<Submitting />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/registerstudent" element={<Registerstud />} />
      <Route path="/registeradmin" element={<RegisterAd />} />
      <Route path="/underworking" element={<UnderC />} />
    </Routes>
  )

}

export default App;
