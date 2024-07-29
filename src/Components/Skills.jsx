// import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   FaReact,
//   FaGitAlt,
//   FaGithub,
//   FaNpm,
//   FaFigma,
//   FaBootstrap,
//   FaHtml5,
//   FaCss3,
// } from "react-icons/fa";
// import { DiJavascript1 } from "react-icons/di";
// import { SiTailwindcss } from "react-icons/si";

// const Skills = ({ skill }) => {
//   const icon = {
//     HTML: <FaHtml5 />,
//     CSS: <FaCss3 />,
//     Javascript: <DiJavascript1 />,
//     Bootstrap: <FaBootstrap />,
//     Tailwind: <SiTailwindcss />,
//     "C++": <CgCPlusPlus />,
//     React: <FaReact />,
//     Git: <FaGitAlt />,
//     Github: <FaGithub />,
//     Npm: <FaNpm />,
//     Figma: <FaFigma />,
//   };

//   return (
//     <div title={skill} className="SkillBox">
//       {icon[skill]}
//     </div>
//   );
// };

// export default Skills;
import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  // FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiMysql } from "react-icons/di";
import { SiExpress, SiPython } from "react-icons/si";
import { FaWifi, FaBug, FaNetworkWired } from "react-icons/fa"; // These are generic icons. Replace with specific ones if available.


const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    MySQL: <DiMysql />,
    MongoDB: <DiMongodb />,
    Python: <SiPython />,
    Java: <FaJava />,
    "Express.js": <SiExpress />,
    Wireshark: <FaWifi />, // Placeholder icon
    BurpSuite: <FaBug />, // Placeholder icon
    Nmap: <FaNetworkWired />, // Placeholder icon
    "Node.js": <FaNodeJs />



  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill] || <span>Icon not found</span>}
    </div>
  );
};

export default Skills;
