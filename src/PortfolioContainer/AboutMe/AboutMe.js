import React, { useEffect } from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css"

function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="aboutMeContainer" id="about">
        <div className="heading" data-aos="fade-right">About Me</div>
        <div data-aos="fade-up" className="aboutMeParagraph ">
          <p >
            {" "}
            I am Rama Krishna. I am a Front End Developer and my primary skills are HTML5, CSS3, JavaScript, ReactJS and GITHUB.
            I just love learning new technologies, I am having totally 2 years of experience as a front end developer. we have clients ranging from individuals and small-businesses all the way to large enterprise corporations.Interested in the entire frontend spectrum and working on ambitious projects with positive people.
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
