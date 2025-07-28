import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nevigate = useNavigate("");

  const btnHandler = () => {
    nevigate("/contact");
  };

  return (
    <div className="home" id="home">
      <div className="home-text">
        <h1>
          Hello, I'm Shivam <br />
          Full Stack Developer...
        </h1>
      </div>
      <div className="home-btn">
        <button onClick={btnHandler}>Hire Me</button>
      </div>
    </div>
  );
};

export default Home;
