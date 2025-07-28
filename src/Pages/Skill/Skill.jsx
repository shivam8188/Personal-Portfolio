import React from "react";
import Header from "../../Component/Header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillData } from "./utils";
import './skill.css'


const Skill = () => {
  return (
    <div className="skill" id="skill">
      <Header headerText="My Skills" icon={<BsInfoCircleFill />} />

      <div className="skill-content">
        {skillData.map((item, i) => (
          <div key={i} className="skill-content-data">
            <h3 className="skill-content-data-inner-context"> {item.labels}</h3>
            <div className="skillName">
              {
              item.data.map((skillItem, j) => (
                <div className="progressBar" key={j}>
                  <p>{skillItem.skillName}</p>
                  <line percentage={skillData.percetage} 
                  strokeColor="#ffdd40"  strokeWidth="2"
                  trailWidth={"2"}
                  strokeLinecap="square"/>
                </div>
              ))
              }
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skill;
