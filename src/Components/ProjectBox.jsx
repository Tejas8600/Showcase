import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Network_ScannerDesc:
      "Advanced network scanner using python leveraging ARP, ICMP, and UDP protocols with real-time device detection and passive sniffing capabilities.",
      Network_ScannerGithub: "https://github.com/Tejas8600/CyberSecurity-Tools-Python/tree/main/Network_scanner",
    // Network_scannerWebsite: "https://gym-website-pink.vercel.app/",

    Food_Delivery_AppDesc:
      "Built a MERN stack application featuring user authentication, dynamic item display, and an interactive shopping cart.",
      Food_Delivery_AppGithub: "https://github.com/Tejas8600/Food-Delivery-App-MERN-.git",
    // MovieWebsite: "https://film-mania.vercel.app/",

    Employee_Management_SystemDesc:
      "Developed an Employee Management System with a Spring Boot backend and a React frontend, providing full CRUD functionality.",
      Employee_Management_SystemGithub: "https://github.com/Tejas8600/Employee-Management-System.git",
    // ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    Web_ScrappingDesc:
      "Implemented a web scraping tool using Python and Beautiful Soup to extract housing data from a real estate website.",
      Web_ScrappingGithub: "https://github.com/Tejas8600/WebScrapping-using-Python/tree/main/Assignment",
    // BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        {/* <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a> */}
      </div>
    </div>
  );
};
export default ProjectBox;
