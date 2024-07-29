import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Network_Scanner" />
        <ProjectBox projectPhoto={FilmImage} projectName="Food_Delivery_App" />
        <ProjectBox projectPhoto={ColourImage} projectName="Employee_Management_System" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Web_Scrapping" />
      </div>
    </div>
  );
};

export default Projects;
