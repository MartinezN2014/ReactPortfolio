import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "USAweatherforecast",
    image: "/images/weatherforecast.jpg", 
    deployedLink: "https://martinezn2014.github.io/USAWeatherForecast/",
    githubLink: "https://github.com/MartinezN2014/USAWeatherForecast",
  },
  {
    title: "Weather Dashboard",
    image: "/images/WorkdayScheduler.png",
    deployedLink: "https://martinezn2014.github.io/WorkScheduler/",
    githubLink: "https://github.com/MartinezN2014/WorkScheduler",
  },
  {
    title: "Note Taker",
    image: "/images/NoteTaker.png", 
    deployedLink: "https://sheltered-beyond-04085-c825b6c96e23.herokuapp.com/",
    githubLink: "https://github.com/MartinezN2014/NelsonsNoteTaker",
  },
  {
    title: "Web Text Editor",
    image: "/images/Webtexteditor.png", 
    deployedLink: "https://webtexteditor-87284f3f26b5.herokuapp.com/",
    githubLink: "https://github.com/MartinezN2014/WEBtextEditor",
  },
  {
    title: "Factors",
    image: "/images/Factors.png", 
    deployedLink: "https://brousy.github.io/factors/",
    githubLink: "https://github.com/brousy/factors",
  },
  {
    title: "Primal Planner",
    image: "/images/PrimalPlanner.png", 
    deployedLink: "https://primalplanner-6f3879bf7f09.herokuapp.com/",
    githubLink: "https://github.com/wJollie/Primal-Planner",

  },
  
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="projectPageTitle">Portfolio</h1>
      <div className="projectWrapper">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
      </div>
    </div>
  );
};

export default Portfolio;