import React from "react";
import "./header.css";

const Header = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span className="span">{icon}</span>
    </div>
  );
};

export default Header;
