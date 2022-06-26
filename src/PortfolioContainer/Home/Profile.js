import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import vid2 from "../../assets/Home/vid2.mp4";


export default function Profile() {
  return (
    <div className="profile-container" id="home">
      
      <div className="profile-parent">
        <div className="profile-details">
          <div className="vid-container">
            <video className="heroBGVideoWrapper" autoPlay loop muted>
              <source src={vid2} type="video/mp4" />
            </video>
          </div>

        

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello , I'm <span className="higghlighted-text">Rama Krishnan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front End Developer 💻",
                    9000,
                    
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Love Building Web apps .
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="resume.pdf" download="resume.pdf">
              <button className="resume-button">
                {""}
                Get Resume{" "}
              </button>
            </a>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
