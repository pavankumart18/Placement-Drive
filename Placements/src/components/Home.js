import React,{useState} from "react";
import Header from "./Header.js";
import Student from "./Student.js";
import Footer from "./Footer.js";
import Admin from "./Admin.js";


function Home() {
  const [currentForm,setCurrentFrom]=useState('Student');
  const toggleForm = (formName) => {
    setCurrentFrom(formName);
  }
  
  return (
    <div>
      <Header /> 
      {
        currentForm==="Student" ? <Student onFormSwitch={toggleForm} /> : <Admin onFormSwitch={toggleForm} /> 
      }
      <Footer />
    </div>
  );
}

export default Home;
