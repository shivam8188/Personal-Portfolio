import React from "react";
import Header from "../../Component/Header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./project.css";

const Project = () => {
  return (
    <div className="project" id="project">
      <Header headerText="My Project " icon={<BsInfoCircleFill />} />

      <div className="project-content">
        <div className="project-content-left">
          <div className="project1">
            <h1>CRUD Operation</h1>
            <p>
              This project is used to perform CRUD (create,read,update,delete) operation
              data of the employees. I have used technology like HTML/CSS
              ,JavaScript, Bootstrap, and React Js.
            </p>
            {/* <Link to={""}>
              <button>Code Link</button>
            </Link>
            <Link to={""}>
              <button>Run Code</button>
            </Link> */}
          </div>

          <div className="project2">
            <h1>Personal Portfolio</h1>
            <p>
              This is a React based project.Here you can check my personal
              information like my Education, Projects, etc.
            </p>
            {/* <Link to={""}>
              <button>Code Link</button>
            </Link>
            <Link to={""}>
              <button>Run Code</button>
            </Link> */}
          </div>
        </div>

        <div className="project-content-right">
          <div className="project3">
            <h1>Check Weather </h1>
            <p>
              this project is used to check city weather using API. I have used
              technology like HTML/CSS ,JavaScript and open API.
            </p>
            {/* <Link to={""}>
              <button>Code Link</button>{" "}
            </Link>
            <Link to={""}>
              <button>Run Code</button>{" "}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
