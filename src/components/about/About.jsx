import React from "react";
import "./about.css";

import resume from "../../assets/riyagoyal.pdf";


const About = () => {
  return (
    <section id="about-me-section">
      <h5>Get to Know</h5>
      <h2>About me</h2>
     
      <div className="about-content">
        <div className="about-cards">
          
        </div>
        <p className="aboutme">
        "As a pre-final year Computer Science student at Jaypee Institute of Information Technology, Noida (2021-2025), I excel in Data Structures, Algorithms, Web development. Also learned tech like  Flutter, Natural Language Processing (NLP) .I bring a passion for innovation and a commitment to staying updated on the latest advancements as I pursue my B.Tech degree."
           
        </p>
        <a href="#contact" className="btn btn-primary">
         
          Let's Talk
        </a>
        <a href={resume} download className="btn btn-primary">
        Download CV
      </a>
      </div>
    </section>
  );
};

export default About;

