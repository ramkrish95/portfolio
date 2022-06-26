import React, { useEffect } from "react";
import "./ActualProject.css";
import Aos from "aos";
import "aos/dist/aos.css"

function ActualProject(props) {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


  return (
    <>
      <div className="actualProjectContainer" data-aos="flip-right">
        <div className="img"><img src={props.img} alt="Project" /></div>
        <div className="title">{props.title}</div>
        <div className="details">{props.details}
          <a href={props.github} className="button-link" target="_blank">DEMO</a>
          <a href={props.code} className="button-link" target="_blank">CODE</a>
        </div>
      </div>
    </>
  );
}

export default ActualProject;
