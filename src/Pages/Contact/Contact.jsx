import React from "react";
import Header from "../../Component/Header/Header";
import { BsInfoCircleFill } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  
  const btnHandler=()=>{
    alert("form submitted")
  }
  return (
    <div id="contact" className="contact">
      <Header
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="form">
        <div className="Iname">
          <label htmlFor="">Name:</label>
          <input type="text" />
        </div>
        <div className="Iemail">
          <label htmlFor="">Email:</label>
          <input type="email" />
        </div>
        <div className="Idesc">
          <label htmlFor="">Description:</label>
          <input type="text" className="desc"/>
        </div>
        <button onClick={btnHandler}>Submit</button>
      </div>

    </div>            
  );
};
export default Contact;
