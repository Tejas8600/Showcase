import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hello, my name is <b>Tejas Puri</b>. I am a passionate and dedicated <b>software developer</b>
            with expertise in <b>FullStack Java / MERN</b>, <b>Python programming</b>, and <b>MySQL database management</b>. 
            I graduated from Sinhgad Institue Of Technology Lonavala with a <b>BE in Information Technology</b>.
            <br />
            <br />
            I love to create projects and put my own twists on them; you can check out some of my work in the projects section.
            <br />
            <br />
            Apart from coding, I am a <b>Cybersecurity Enthusiast</b>, focusing on building cybersecurity skills.<br /> Additionally, I am exploring tools for cybersecurity analyst roles, including <b>SIEM</b>.
            <br />
            <br />
            In the future, I hope to work in any of the following <b>roles</b>:
            <br />
            - Software Developer
            <br />
            - SOC Analyst
            <br />
            - Python Developer
            <br />
            - Java Developer
            <br />
            - MySQL Developer
            <br />
            - Jr. Cybersecurity Analyst
            <br />
            <br />
            Moreover, I love to <b>write</b> and <b>explore new locations</b> in my spare time.
            <br />I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me; links are in the footer.
            <br />
          </p>

          {/* <a href="Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload />
            </button>
          </a> */}
        </div>
      </div>

      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
      <Skills skill="MySQL" />
      <Skills skill="Python" />
      <Skills skill="Java" />
      <Skills skill="MongoDB" />
      <Skills skill="Express.js" />
      <Skills skill="React" />
      <Skills skill="Node.js" />
      <Skills skill="Javascript" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Wireshark" />
        <Skills skill="BurpSuite" />
        <Skills skill="Nmap" />
        <Skills skill="Npm" />
        {/* <Skills skill="Tailwind" /> */}
        
        
        
        {/* <Skills skill="C++" /> */}
        {/* <Skills skill="Figma" /> */}
        
        
        
       
        
        
      </div>
    </>
  );
};

export default About;
