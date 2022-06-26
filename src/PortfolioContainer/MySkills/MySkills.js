import React, { useEffect } from "react";
import "./MySkills.css";
import icon from "../../assets/Home/icon.png";
import Aos from "aos";
import "aos/dist/aos.css"

function MySkills() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="mySkillsContainer" id="skills">
        <div className="square"></div>
        <div className="square"> </div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="mySkillsHeading" data-aos="fade-down">My Skills</div>
        <div className="iconAndSkillsContainer">
          <div className="iconImg" data-aos="fade-right">
            <img className="skillsImg" src={icon} alt="" />
          </div>
          <div className="actualSkillsCOntainer" data-aos="fade-left">
            <div className="skillName">
              <label className="skillLabel" for="html">
                HTML5
              </label>
              <progress className="progressBar" id="html" value="85" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="CSS">
                CSS3
              </label>
              <progress id="CSS" value="85" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="Javascript">
                Javascript
              </label>
              <progress id="Javascript" value="75" max="100">
                {" "}
                75%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="React">
                React JS
              </label>
              <progress id="React" value="65" max="100">
                {" "}
                65%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="Java">
                Bootstrap 5
              </label>
              <progress id="Java" value="75" max="100">
                {" "}
                75%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="C++">
                Github 
              </label>
              <progress id="C++" value="85" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
