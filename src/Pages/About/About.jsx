import React from "react";
import Header from "../../Component/Header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./about.css";
// import {portfolio_image} from '../Assests/img1.jpeg'
// import {img1} from '../Assests/img1.jpeg'


const personalDetails = [
  {
    label: "Name",
    value: "Shivam Kumar Vishwakarma",
  },
  {
    label: "Age",
    value: 21,
  },
  {
    label: "Email",
    value: "shivamv7770@gmail.com",
  },
  {
    label: "Contact No",
    value: 8188948830,
  },
  {
    label: "Address",
    value: "India",
  }
];

const jobSummary =
  "I am a dedicated and passionate Front-End Developer with creating responsive web interfaces. I have honed my skills in Java HTML/CSS, and JavaScript, Reactjs.I have done some projects where you can check my efficiency and I'm well-versed in Version Control Systems like GIT. I am excited about the opportunity to contribute to your team and create exceptional web experiences that engage users and drive business goals.";

const About = () => {
  return (
    <div className="about" id="about">
      <Header headerText="About Me" icon={<BsInfoCircleFill />} />

      <div className="about-content">
        <div className="about-content-left">
        <h3>Front End Developer</h3>
        <p>{jobSummary}</p>

        <h3 className="piHeader">Personal Information</h3>
        <ul>
          {personalDetails.map((item, i) => (
            <li key={i}>
              <span className="title">{item.label}</span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
        </div>
        <div className="about-content-right">
          {/* <img src='../Assests/img1.jpeg' alt="" /> */}
        </div>
       
      </div>
    </div>
  );
};

export default About;
