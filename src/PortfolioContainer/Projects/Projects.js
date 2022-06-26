import React, { useEffect } from "react";
import ActualProject from "./ActualProject";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css"
import projectImg1 from "./project1.png"
import projectImg2 from "./project2.png"
import projectImg3 from "./project3.png"
import projectImg4 from "./project4.png"
import projectImg5 from "./project5.png"
import projectImg6 from "./projects6.PNG"

function Projects() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
 
  return (
    <>
      <div className="proj" id="projects">
        <div className="projectHeading" data-aos="fade-up">Projects</div>
        <div className="projectContainer">
          <ActualProject 
            github="https://ramkrish95.github.io/Hotel-management/"
            code="https://github.com/ramkrish95/Hotel-management/tree/master"
            title="Hotel-management (Web)"
            img={projectImg1}
         
          ></ActualProject>
          <ActualProject
            github="https://ramkrish95.github.io/restaurant-management/"
            code="https://github.com/ramkrish95/restaurant-management/tree/master"
            title="Restaurant-management (Web)"
            img={projectImg2}
           
          ></ActualProject>
          <ActualProject
            github="https://ramkrish95.github.io/weather/"
            code="https://github.com/ramkrish95/weather/tree/master"
            title="Weather App (Reactjs)"
            img={projectImg3}
         
          ></ActualProject>
          <ActualProject
            github="https://ramkrish95.github.io/quiz/"
            code="https://github.com/ramkrish95/quiz/tree/master"
            title="Quiz App (Reactjs)"
            img={projectImg4}
          
          ></ActualProject>
           <ActualProject
            github="https://ramkrish95.github.io/ecommerce/"
            code="https://github.com/ramkrish95/ecommerce/tree/master"
            title="Ecommerce (Reactjs)"
            img={projectImg5}
          
          ></ActualProject>
           <ActualProject
            github="https://ramkrish95.github.io/portfolio/"
            code="https://github.com/ramkrish95/portfolio/tree/master"
            title="portfolio (Reactjs)"
            img={projectImg6}
          ></ActualProject>
        </div>
      </div>
    </>
  );
}

export default Projects;
