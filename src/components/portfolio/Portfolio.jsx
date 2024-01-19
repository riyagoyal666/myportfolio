import React from "react";
import "./portfolio.css";
import img1 from "../../assets/myport.png";
import img2 from "../../assets/mern1.png";
import img3 from "../../assets/chatbot.png";
import img4 from "../../assets/todo.jpeg";
// import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/floyd.png";
import img7 from "../../assets/pm2.png";
// import img8 from "../../assets/portfolio8.png";
import img9 from "../../assets/calculator.png";
// import { Card } from "@mui/material";

const data = [
  {
    id: 1,
    image: img1,
    title: "My Portfolio",
    description:
      "As a personal portfolio website, it showcases my professional work, achievements, and skills. It serves as an online portfolio that demonstrates my expertise and capabilities in my field of work display in several sections about me, my work experience, education, and skills.",
    github: "https://github.com/rensilva5/My-Portflio-Website",
    
  },
  {
    id: 7,
    image: img7,
    title: "Crypto voice-controlled Website",
    description:
      "A crypto website with graph analysis on the basis of changing data ,voice navigated routes ,voice integrated ALAN-AI feature to ask for news and it will render to that page and display and tells about the news ,additionally login/signup is also implemented with the cart functionality.",
    github: "https://github.com/rensilva5/chat-app-firebase",
    //demo: "https://github.com/riyagoyal666/prominor.git",
  },
  {
    id: 2,
    image: img2,
    title: "JUSTfoodie",
    description:
      "A website designed to order food by fetching food items to be displayed from backend with additional search functionality,cart functionality ,secure login/signup displays with the usage of becrypt.js .",
    github: "https://github.com/riyagoyal666/mernpro",
   
  },
  // {
  //   id: 9,
  //   image: img9,
  //   title: "Photo Instagram",
  //   description:
  //     "This software application is designed to post pictues by downloanding on them using bottons in react, so the app alows us to exchange memories; this project uses javascript, and firebase database as database. The TravelGram app uses react functionally.",
  //   github: "https://github.com/rensilva5/Colomgram",
  //   demo: "https://travelgram-rensilva5.vercel.app/",
  // },


  {
    id: 9,
    image: img9,
    title: "Modern Calculator",
    description:
      "This Calculator is designed using animated 3D buttons which have sound effects,daya and night mode option  to switch,a saved history option to retrieve the calculation history .",
    github: "https://github.com/riyagoyal666/calculator.git",
    demo: "https://lively-gumdrop-f21dac.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "NLP implemented chatbot  for easy ordering and tracking food",
    description:
      " I have implemented chatbot using google dialogflow which use entities and  NLP to understand and communicate with user for easy ordering and helps them to track their order this projected is implemented using fastAPI , Python,MySql.",
   // github: "https://github.com/rensilva5/blog-website",
    // demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: img4,
    title: "Todo App",
    description:
      "My personal to-do app has been designed to help individuals manage their tasks, goals, and responsibilities. Secure login/signup functionality implemented using firebase .This project is made using flutter technology",
    //github: "https://github.com/rensilva5/three-do-web",
    //demo: "https://three-do-rs.web.app/",
  },
  // {
  //   id: 5,
  //   image: img5,
  //   title: "Patient List",
  //   description:
  //     "The Patient List app's primary goal is to help healthcare professionals manage their patient information efficiently. I provide a user-friendly interface that allows users to create and view patient profiles, manage patient data, and keep track of appointments and medical histories.",
  //   github: "https://github.com/rensilva5/create-patients-list-app",
  //   // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  // },
  {
    id: 6,
    image: img6,
    title: "Postal Carrier Transistory Data Structure Project",
    description:
      "Easier and time saving navigating way for postal service for carrying and delivering articles .Demonstrated Floyd-Warshall and analysed how Dijkstra failed.",
    github: "https://github.com/riyagoyal666/dsaproject.git",
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="description_container">
                  <h5 className="description_text">{description}</h5>
                </div>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${title} source code on Github`}
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${title} live demo`}
                  >
                    Demo
                  </a>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
